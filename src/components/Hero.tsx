"use client";

import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import { PERSONAL, SOCIALS, HERO_TITLES, HERO_BADGES } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary-500/10 dark:bg-primary-400/10 text-primary-600 dark:text-primary-400 border border-primary-500/20 rounded-full text-sm font-semibold mb-4 tracking-wide">
                👋 Hello, I&apos;m
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-4 tracking-tight leading-tight">
              {PERSONAL.shortName}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700 dark:from-primary-400 dark:to-cyan-300">
                Shelke
              </span>
            </h1>

            <div className="text-xl md:text-2xl font-semibold text-slate-600 dark:text-slate-300 mb-8 h-[36px]">
              I am a{" "}
              <span className="text-primary-600 dark:text-primary-400 font-bold">
                <Typewriter
                  words={HERO_TITLES}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </div>

            <p className="text-slate-500 dark:text-slate-300 text-lg mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
              {PERSONAL.tagline}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-10">
              <a
                href="#contact"
                className="flex items-center space-x-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 w-full sm:w-auto justify-center shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 hover:scale-105"
              >
                <Mail size={20} />
                <span>Contact Me</span>
              </a>
              <a
                href={PERSONAL.cvUrl}
                download={PERSONAL.cvDownloadName}
                className="flex items-center space-x-2 bg-white/80 dark:bg-white/10 backdrop-blur-md text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 hover:border-primary-500 dark:hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 px-8 py-4 rounded-full font-semibold transition-all duration-300 w-full sm:w-auto justify-center hover:scale-105"
              >
                <Download size={20} />
                <span>Download CV</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <span className="text-sm text-slate-400 dark:text-slate-400 font-medium">Follow me:</span>
              <div className="flex space-x-3">
                <motion.a
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  href={SOCIALS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-100 dark:bg-white/10 backdrop-blur-md text-slate-700 dark:text-slate-200 rounded-full hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-all shadow-sm"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  href={SOCIALS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-100 dark:bg-white/10 backdrop-blur-md text-slate-700 dark:text-slate-200 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all shadow-sm"
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  href={SOCIALS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-100 dark:bg-white/10 backdrop-blur-md text-slate-700 dark:text-slate-200 rounded-full hover:bg-pink-500 hover:text-white dark:hover:bg-pink-500 transition-all shadow-sm"
                >
                  <Instagram size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Hero Image with animations */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative w-64 h-64 md:w-[420px] md:h-[420px] mx-auto">
              {/* Outer pulse rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary-400/30 dark:border-primary-400/20 animate-pulse-ring" />
              <div className="absolute inset-[-16px] rounded-full border border-primary-400/15 dark:border-primary-400/10 animate-pulse-ring" style={{ animationDelay: "1s" }} />

              {/* Glow blob */}
              <div className="absolute inset-4 bg-gradient-to-tr from-primary-500/30 via-cyan-400/20 to-transparent rounded-full blur-3xl" />

              {/* Floating Image Container */}
              <motion.div
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full"
              >
                <div className="relative w-full h-full rounded-full border-4 border-white dark:border-white/20 shadow-2xl shadow-primary-500/20 dark:shadow-primary-500/30 overflow-hidden bg-slate-100 dark:bg-black glow-primary">
                  <Image
                    src={PERSONAL.heroImage}
                    alt={PERSONAL.name}
                    fill
                    sizes="(max-width: 768px) 256px, 420px"
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>

              {/* Decorative floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -right-4 md:-right-8 bg-white dark:bg-slate-900 dark:border dark:border-white/10 rounded-2xl px-4 py-2 shadow-xl"
              >
                <p className="text-xs text-slate-500 dark:text-slate-400">Experience</p>
                <p className="text-lg font-black text-primary-600 dark:text-primary-400">1+ Yrs</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-4 md:-left-8 bg-white dark:bg-slate-900 dark:border dark:border-white/10 rounded-2xl px-4 py-2 shadow-xl"
              >
                <p className="text-xs text-slate-500 dark:text-slate-400">Projects Done</p>
                <p className="text-lg font-black text-primary-600 dark:text-primary-400">10+</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
