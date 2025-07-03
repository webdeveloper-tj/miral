"use client";

import PhotoAndVideoTaker from "@/components/PhotoAndVideoTaker";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Home = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [showMediaCapture, setShowMediaCapture] = useState(false);
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    setIsMounted(true);
    setShowMediaCapture(true);
    // Set current date in a beautiful format
    setCurrentDate(
      new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
  }, []);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } },
  };

  // Floating hearts data
  const floatingHearts = Array(8)
    .fill(0)
    .map((_, i) => ({
      id: i,
      size: Math.random() * 20 + 10,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 3,
    }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-rose-50 to-amber-50 p-4 md:p-8 flex justify-center items-center relative overflow-hidden">
      {/* Background floating hearts */}
      {floatingHearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-rose-400 opacity-70"
          style={{
            left: `${heart.left}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${heart.size}px`,
          }}
          animate={{
            y: [0, -100],
            opacity: [0.7, 0],
          }}
          transition={{
            delay: heart.delay,
            duration: heart.duration,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          ❤️
        </motion.div>
      ))}

      <PhotoAndVideoTaker />

      <motion.div
        className="max-w-4xl w-full bg-white bg-opacity-90 rounded-3xl shadow-xl p-6 md:p-10 font-sans text-gray-800 overflow-hidden relative z-10"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Date display */}
        <motion.div
          className="absolute top-4 right-4 text-sm text-rose-500 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {currentDate}
        </motion.div>

        {/* Floating hearts decoration - enhanced */}
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-pink-200 rounded-full opacity-20 animate-pulse"></div>
        <div
          className="absolute -bottom-5 -right-5 w-24 h-24 bg-rose-300 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-1/4 -right-8 w-16 h-16 bg-amber-200 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/3 -left-8 w-12 h-12 bg-emerald-200 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>

        {/* Header with flag and title - enhanced */}
        <motion.header
          className="flex flex-col items-center mb-10 relative"
          variants={container}
          initial="hidden"
          animate={isMounted ? "show" : "hidden"}
        >
          {/* Animated Algerian flag waving effect */}
          <motion.div
            variants={item}
            animate={{
              rotate: [0, 5, -5, 5, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <img
              src="./Flag_of_Algeria.svg"
              alt="Flag of Algeria"
              className="w-32 mb-4 rounded-xl shadow-md transform hover:rotate-6 transition-transform duration-500 border-2 border-white"
            />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-600 mb-2 tracking-wide text-center"
            variants={item}
          >
            Hello, I'm Miral 🌸
            <motion.span
              className="ml-2 inline-block"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              🇩🇿
            </motion.span>
          </motion.h1>

          <motion.p
            className="italic text-lg text-gray-600 max-w-xl text-center"
            variants={item}
          >
            And this is my beloved country — Algeria
            <span className="text-xl ml-1">🇩🇿</span>
          </motion.p>

          {/* Enhanced floating heart */}
          <motion.div
            className="absolute -bottom-4 right-10 text-4xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 20, -20, 0],
            }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            ❤️
          </motion.div>
        </motion.header>

        {/* Nationality and People - enhanced */}
        <motion.section
          className="mb-12 relative"
          variants={fadeIn}
          initial="hidden"
          animate={isMounted ? "show" : "hidden"}
        >
          <div className="absolute -left-6 top-0 w-2 h-full bg-gradient-to-b from-emerald-400 to-amber-400 rounded-full"></div>
          <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-amber-600 mb-4 pl-4 flex items-center">
            <motion.span
              className="mr-2"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🌍
            </motion.span>
            Nationality & People
          </h2>
          <p className="pl-4 text-gray-700 leading-relaxed">
            Algeria is home to proud and warm-hearted people known as Algerians.
            Our culture blends Arab, Berber, and Mediterranean influences,
            creating a rich tapestry of traditions and languages that I cherish
            deeply.
          </p>

          {/* Cultural icons floating animation */}
          <div className="flex justify-around mt-4">
            {["🧕", "🏺", "📜", "☕"].map((icon, i) => (
              <motion.div
                key={i}
                className="text-3xl"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 4,
                  delay: i * 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                {icon}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Historic Places - enhanced */}
        <motion.section
          className="mb-12"
          variants={container}
          initial="hidden"
          animate={isMounted ? "show" : "hidden"}
        >
          <motion.h2
            variants={item}
            className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-amber-600 mb-4 flex items-center"
          >
            <motion.span
              className="mr-2"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              🏛️
            </motion.span>
            Historic Places
          </motion.h2>
          <motion.p
            variants={item}
            className="text-gray-700 leading-relaxed mb-6"
          >
            From the ancient Roman ruins of Timgad to the old city walls of
            Algiers' Casbah, Algeria holds centuries of stories. The Sahara
            desert, with its endless dunes, tells the tale of resilience and
            beauty that captivates my heart.
          </motion.p>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4"
            variants={container}
          >
            {[
              { src: "./history_1.jpg", alt: "Timgad Ruins", emoji: "🏺" },
              { src: "./history_2.png", alt: "Casbah of Algiers", emoji: "🏰" },
              { src: "./culutre.jpg", alt: "Algerian Culture", emoji: "🎨" },
            ].map((img, i) => (
              <motion.div
                key={i}
                variants={item}
                className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative group"
                whileHover={{ y: -5 }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <motion.div
                    className="text-white text-2xl"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    {img.emoji}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Museums - enhanced */}
        <motion.section
          className="mb-12"
          variants={fadeIn}
          initial="hidden"
          animate={isMounted ? "show" : "hidden"}
        >
          <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-amber-600 mb-4 flex items-center">
            <motion.span
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mr-2"
            >
              🖼️
            </motion.span>
            Museums
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Algeria's museums showcase our art, history, and culture. The Bardo
            Museum in Algiers features stunning artifacts from ancient times,
            while the National Museum of Antiquities holds priceless treasures
            that fill me with national pride.
          </p>
          <motion.div
            className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative group"
            whileHover={{ scale: 1.01 }}
          >
            <img
              src="./museum.jpg"
              alt="National Museum of Antiquities"
              className="w-full h-64 md:h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
              <motion.p
                className="text-white text-lg italic"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                "Preserving our glorious past for future generations"
              </motion.p>
            </div>
          </motion.div>
        </motion.section>

        {/* Culture & Traditions - enhanced */}
        <motion.section
          variants={container}
          initial="hidden"
          animate={isMounted ? "show" : "hidden"}
        >
          <motion.h2
            variants={item}
            className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-amber-600 mb-4 flex items-center"
          >
            <motion.span
              animate={{
                rotate: [0, 20, -20, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="mr-2"
            >
              🎭
            </motion.span>
            Culture & Traditions
          </motion.h2>
          <motion.p
            variants={item}
            className="text-gray-700 leading-relaxed mb-6"
          >
            Algerian culture is full of warmth — from our delicious couscous and
            sweet pastries like makroudh to our music styles such as Rai. Our
            festivals are full of joy and dance, and hospitality is at the heart
            of every home, just like the love I hold for my country.
          </motion.p>

          {/* Animated food icons */}
          <motion.div
            className="flex justify-center gap-4 mb-6"
            variants={container}
          >
            {["🍲", "🥮", "🍵", "🍯"].map((icon, i) => (
              <motion.div
                key={i}
                variants={item}
                className="text-4xl"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                {icon}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4"
            variants={container}
          >
            {[
              {
                src: "./nation_1.jpg",
                alt: "Couscous Dish",
                caption: "Traditional Couscous",
              },
              {
                src: "./nation_2.jpeg",
                alt: "Makroudh Pastry",
                caption: "Sweet Makroudh",
              },
            ].map((img, i) => (
              <motion.div
                key={i}
                variants={item}
                className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative group"
                whileHover={{ y: -5 }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                  <motion.h3
                    className="text-white font-medium text-xl"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                  >
                    {img.caption}
                  </motion.h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* New section: Personal Connection */}
        <motion.section
          className="my-12 p-6 bg-gradient-to-r from-rose-50 to-amber-50 rounded-xl border border-rose-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-rose-700 mb-4 flex items-center">
            <motion.span
              className="mr-2"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              💖
            </motion.span>
            My Personal Connection
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Every time I hear the call to prayer echoing through the streets, or
            smell the aroma of fresh mint tea, my heart swells with pride for my
            Algerian heritage. The laughter of family gatherings, the vibrant
            colors of our traditional dresses, and the warmth of our people are
            the threads that weave the fabric of my identity.
          </p>
          <motion.div
            className="mt-4 flex justify-center"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="text-4xl">🇩🇿</span>
          </motion.div>
        </motion.section>

        {/* Enhanced footer */}
        <motion.footer
          className="mt-16 text-center italic text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-amber-600 font-semibold text-xl py-4 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.div
            className="absolute -left-4 top-1/2 transform -translate-y-1/2 text-2xl"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ❣️
          </motion.div>
          <motion.div
            className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-2xl"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            ❣️
          </motion.div>
          <motion.span
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Algeria, forever in my heart — my love, my home.
          </motion.span>

          {/* Floating Algerian flag at bottom */}
          <motion.div
            className="mt-4"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            <span className="text-3xl">🇩🇿</span>
          </motion.div>
        </motion.footer>
      </motion.div>
    </div>
  );
};

export default Home;
