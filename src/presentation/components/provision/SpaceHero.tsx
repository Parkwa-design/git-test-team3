"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const SpaceHero = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/provision/hero.png"
          alt="Achim Space Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" /> {/* Subtle dim for readability */}
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xs tracking-[0.3em] uppercase mb-4 font-medium"
        >
          Offline Experience
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-serif mb-8 leading-tight tracking-tight"
        >
          Achim Space
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="w-px h-16 bg-white/50 mx-auto mt-8"
        />
      </div>
    </section>
  );
};

export default SpaceHero;
