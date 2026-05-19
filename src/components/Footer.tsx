"use client";

import { Github, Linkedin, Heart, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { PERSONAL, SOCIALS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-white/80 dark:bg-white/[0.03] backdrop-blur-md border-t border-slate-200/60 dark:border-white/10">
      <div className="container mx-auto px-4 md:px-6 py-12">

        {/* 3-column grid — all columns centered */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Column 1 — Brand */}
          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/favicon.svg" alt="SC" width={36} height={36} className="rounded-xl shadow-lg shadow-primary-500/30" />
              <span className="text-xl font-black text-slate-900 dark:text-white">ADITYA</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-300 leading-relaxed max-w-xs">
              A passionate Full Stack Developer based in Mumbai, crafting modern, responsive web experiences.
            </p>
          </div>

          {/* Column 2 — Contact */}
          <div className="flex flex-col items-start">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href={`mailto:${PERSONAL.email}`} className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  <Mail size={14} className="text-primary-500 dark:text-primary-400 flex-shrink-0" />
                  <span>{PERSONAL.email}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${PERSONAL.phone.replace(/\s/g, "")}`} className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  <Phone size={14} className="text-primary-500 dark:text-primary-400 flex-shrink-0" />
                  <span>{PERSONAL.phone}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 — Social */}
          <div className="flex flex-col items-start">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-4">Follow Me</h4>
            <div className="flex space-x-3">
              <motion.a whileHover={{ scale: 1.15, y: -3 }} href={SOCIALS.github} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-200 rounded-xl flex items-center justify-center hover:bg-slate-800 hover:text-white dark:hover:bg-slate-700 transition-all">
                <Github size={18} />
              </motion.a>
              <motion.a whileHover={{ scale: 1.15, y: -3 }} href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-200 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Linkedin size={18} />
              </motion.a>

            </div>
          </div>

        </div>

        {/* Bottom copyright — centered */}
        <div className="border-t border-slate-200/60 dark:border-white/10 pt-6 text-center">
          <p className="text-sm text-slate-400 dark:text-slate-500 flex items-center justify-center flex-wrap gap-1">
            <span>© {new Date().getFullYear()} Aditya Shelke. Made with</span>
            <Heart size={13} className="text-red-500" fill="currentColor" />
            <span>All rights reserved.</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
