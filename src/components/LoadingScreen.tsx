"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Cpu, Globe, Rocket, Zap, Layers } from "lucide-react";

interface FloatingIcon {
  Icon: React.ElementType;
  id: number;
  initialX: number;
  initialY: number;
  duration: number;
  delay: number;
  left: string;
  top: string;
}

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [currentStatus, setCurrentStatus] = useState("Initializing...");
  const [floatingIcons, setFloatingIcons] = useState<FloatingIcon[]>([]);
  const [isVisible, setIsVisible] = useState(true);

  const statusMessages = [
    "Initializing Systems...",
    "Loading Assets...",
    "Compiling Modules...",
    "Establishing Connection...",
    "Optimizing Performance...",
    "Almost Ready...",
    "Welcome! 🚀",
  ];

  useEffect(() => {
    // Generate client-side floating icons
    const icons = [Code2, Cpu, Globe, Rocket, Zap, Layers];
    const generated = icons.map((Icon, i) => ({
      Icon,
      id: i,
      initialX: Math.random() * 300 - 150,
      initialY: Math.random() * 300 - 150,
      duration: 3 + Math.random() * 2,
      delay: i * 0.4,
      left: `${15 + Math.random() * 70}%`,
      top: `${10 + Math.random() * 80}%`,
    }));
    setFloatingIcons(generated);

    // Progress bar
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 600);
          return 100;
        }
        return Math.min(prev + Math.random() * 18, 100);
      });
    }, 180);

    // Status messages
    const statusTimer = setInterval(() => {
      setProgress((p) => {
        const idx = Math.min(
          Math.floor((p / 100) * statusMessages.length),
          statusMessages.length - 1
        );
        setCurrentStatus(statusMessages[idx]);
        return p;
      });
    }, 120);

    return () => {
      clearInterval(timer);
      clearInterval(statusTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.08, filter: "blur(12px)" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black overflow-hidden"
        >
          {/* Scanline overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(6,182,212,0.04) 1px, rgba(6,182,212,0.04) 2px)",
            }}
          />

          {/* Radial glow */}
          <div className="absolute inset-0 bg-radial-gradient pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at center, rgba(6,182,212,0.08) 0%, transparent 65%)",
            }}
          />

          {/* Floating icons (client-generated) */}
          <div className="absolute inset-0 pointer-events-none">
            {floatingIcons.map(({ Icon, id, initialX, initialY, duration, delay, left, top }) => (
              <motion.div
                key={id}
                className="absolute text-primary-500/20"
                initial={{ x: initialX, y: initialY, opacity: 0 }}
                animate={{ y: [0, -30, 0], opacity: [0, 0.6, 0], scale: [0.6, 1, 0.6] }}
                transition={{ duration, repeat: Infinity, delay, ease: "easeInOut" }}
                style={{ left, top }}
              >
                <Icon size={28} />
              </motion.div>
            ))}
          </div>

          {/* Main content */}
          <div className="relative z-20 flex flex-col items-center w-full max-w-sm px-6">
            {/* Logo ring */}
            <div className="relative mb-14">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 -m-10 border border-dashed border-white/10 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 -m-5 border border-dotted border-primary-500/30 rounded-full"
              />
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-24 h-24 flex items-center justify-center bg-black rounded-full border-2 border-primary-500/50"
                style={{ boxShadow: "0 0 50px rgba(6,182,212,0.35)" }}
              >
                <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-primary-400 font-mono select-none">
                  AS
                </span>
                <div className="absolute inset-0 rounded-full bg-primary-500/15 animate-ping" style={{ animationDuration: "1.8s" }} />
              </motion.div>
            </div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-white font-black text-2xl tracking-widest mb-1 uppercase"
            >
              Aditya Shelke
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-primary-400 text-xs font-mono tracking-[0.3em] mb-10 uppercase"
            >
              Full Stack Developer
            </motion.p>

            {/* Progress */}
            <div className="w-full space-y-2">
              <div className="flex justify-between text-[11px] font-mono text-primary-400/70 mb-1">
                <span>LOADING</span>
                <span>{Math.round(progress)}%</span>
              </div>

              <div className="relative h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                <motion.div
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary-600 to-cyan-400 rounded-full"
                />
                {/* Shimmer */}
                <motion.div
                  animate={{ x: ["-100%", "400%"] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 w-16 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                />
              </div>

              <div className="h-5 flex items-center justify-center overflow-hidden mt-1">
                <motion.p
                  key={currentStatus}
                  initial={{ y: 14, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -14, opacity: 0 }}
                  className="text-[11px] font-mono text-slate-500"
                >
                  {`> ${currentStatus}`}
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
