"use client";

import { useState, useEffect, lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const About = lazy(() => import("@/components/About"));
const ExperienceEducation = lazy(() => import("@/components/ExperienceEducation"));
const Portfolio = lazy(() => import("@/components/Portfolio"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));
const LoadingScreen = lazy(() => import("@/components/LoadingScreen"));
const ScrollToTop = lazy(() => import("@/components/ScrollToTop"));
const CustomCursor = lazy(() => import("@/components/CustomCursor"));

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isMounted && (
        <Suspense fallback={null}>
          <CustomCursor />
        </Suspense>
      )}

      {isLoading && (
        <Suspense fallback={null}>
          <LoadingScreen />
        </Suspense>
      )}

      <main className="flex min-h-screen flex-col">
        <Header />
        <Hero />
        <Suspense fallback={<div className="py-24" />}>
          <About />
          <ExperienceEducation />
          <Portfolio />
          <Contact />
          <Footer />
        </Suspense>
      </main>

      {isMounted && (
        <Suspense fallback={null}>
          <ScrollToTop />
        </Suspense>
      )}
    </>
  );
}
