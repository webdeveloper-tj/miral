"use client";

import PhotoAndVideoTaker from "@/components/PhotoAndVideoTaker";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Home = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [showMediaCapture, setShowMediaCapture] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Show the media capture component when page loads
    setShowMediaCapture(true);
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
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-rose-50 to-amber-50 p-4 md:p-8 flex justify-center items-center">
      <PhotoAndVideoTaker />

      <motion.div
        className="max-w-4xl w-full bg-white bg-opacity-90 rounded-3xl shadow-xl p-6 md:p-10 font-sans text-gray-800 overflow-hidden"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Floating hearts decoration */}
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-pink-200 rounded-full opacity-20"></div>
        <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-rose-300 rounded-full opacity-20"></div>
        <div className="absolute top-1/4 -right-8 w-16 h-16 bg-amber-200 rounded-full opacity-20"></div>

        {/* Header with flag and title */}
        <motion.header
          className="flex flex-col items-center mb-10 relative"
          variants={container}
          initial="hidden"
          animate={isMounted ? "show" : "hidden"}
        >
          <motion.div variants={item}>
            <img
              src="./Flag_of_Algeria.svg"
              alt="Flag of Algeria"
              className="w-32 mb-4 rounded-xl shadow-md transform hover:rotate-6 transition-transform duration-500"
            />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-600 mb-2 tracking-wide text-center"
            variants={item}
          >
            Hello, I'm Miral 🌸
          </motion.h1>

          <motion.p
            className="italic text-lg text-gray-600 max-w-xl text-center"
            variants={item}
          >
            And this is my beloved country — Algeria 🇩🇿
          </motion.p>

          <motion.div
            className="absolute -bottom-4 right-10 text-4xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            ❤️
          </motion.div>
        </motion.header>

        {/* Nationality and People */}
        <motion.section
          className="mb-12 relative"
          variants={fadeIn}
          initial="hidden"
          animate={isMounted ? "show" : "hidden"}
        >
          <div className="absolute -left-6 top-0 w-2 h-full bg-gradient-to-b from-emerald-400 to-amber-400 rounded-full"></div>
          <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-amber-600 mb-4 pl-4">
            Nationality & People
          </h2>
          <p className="pl-4 text-gray-700 leading-relaxed">
            Algeria is home to proud and warm-hearted people known as Algerians.
            Our culture blends Arab, Berber, and Mediterranean influences,
            creating a rich tapestry of traditions and languages that I cherish
            deeply.
          </p>
        </motion.section>

        {/* Historic Places */}
        <motion.section
          className="mb-12"
          variants={container}
          initial="hidden"
          animate={isMounted ? "show" : "hidden"}
        >
          <motion.h2
            variants={item}
            className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-amber-600 mb-4"
          >
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
            <motion.div
              variants={item}
              className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src="./history_1.jpg"
                alt="Timgad Ruins"
                className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              variants={item}
              className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src="./history_2.png"
                alt="Casbah of Algiers"
                className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              variants={item}
              className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src="./culutre.jpg"
                alt="Algerian Culture"
                className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Museums */}
        <motion.section
          className="mb-12"
          variants={fadeIn}
          initial="hidden"
          animate={isMounted ? "show" : "hidden"}
        >
          <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-amber-600 mb-4">
            Museums
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Algeria's museums showcase our art, history, and culture. The Bardo
            Museum in Algiers features stunning artifacts from ancient times,
            while the National Museum of Antiquities holds priceless treasures
            that fill me with national pride.
          </p>
          <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src="./museum.jpg"
              alt="National Museum of Antiquities"
              className="w-full h-64 md:h-80 object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.section>

        {/* Culture & Traditions */}
        <motion.section
          variants={container}
          initial="hidden"
          animate={isMounted ? "show" : "hidden"}
        >
          <motion.h2
            variants={item}
            className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-amber-600 mb-4"
          >
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
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4"
            variants={container}
          >
            <motion.div
              variants={item}
              className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src="./nation_1.jpg"
                alt="Couscous Dish"
                className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              variants={item}
              className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src="./nation_2.jpeg"
                alt="Makroudh Pastry"
                className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.footer
          className="mt-16 text-center italic text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-amber-600 font-semibold text-xl py-4 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 text-2xl">
            ❣️
          </div>
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-2xl">
            ❣️
          </div>
          Algeria, forever in my heart — my love, my home.
        </motion.footer>
      </motion.div>
    </div>
  );
};

export default Home;
