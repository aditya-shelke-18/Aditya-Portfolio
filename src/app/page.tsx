"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ExperienceEducation from "@/components/ExperienceEducation";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollToTop from "@/components/ScrollToTop";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Minimum 2 seconds loading time so animation can play
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Loading Screen (shown on first visit) */}
      {isLoading && <LoadingScreen />}

      {/* Main App */}
      <main className="flex min-h-screen flex-col">
        <Header />
        <Hero />
        <About />
        <ExperienceEducation />
        <Portfolio />
        <Contact />
        <Footer />
      </main>

      {/* Global Scroll To Top — appears on About, Portfolio, Contact pages */}
      <ScrollToTop />
    </>
  );
}
