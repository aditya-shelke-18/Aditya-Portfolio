import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ParticleBackground from "@/components/ParticleBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const baseUrl = "https://adityashelke.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Aditya Shelke | Full Stack Developer",
    template: "%s | Aditya Shelke",
  },
  description:
    "Portfolio of Aditya Shelke — Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Based in Mumbai, India.",
  keywords: [
    "Aditya Shelke",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer Mumbai",
    "JavaScript Developer",
    "TypeScript Developer",
    "Portfolio",
  ],
  authors: [{ name: "Sundram Pandey", url: "https://github.com/thesundram" }],
  creator: "Sundram Pandey",
  publisher: "Sundram InfoTech PVT. LTD",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: baseUrl,
    siteName: "Aditya Shelke Portfolio",
    title: "Aditya Shelke | Full Stack Developer",
    description:
      "Portfolio of Aditya Shelke — Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Based in Mumbai, India.",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Aditya Shelke — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Shelke | Full Stack Developer",
    description:
      "Portfolio of Aditya Shelke — Full Stack Developer from Mumbai, India.",
    images: ["/hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} antialiased min-h-screen bg-slate-50 dark:bg-black text-slate-900 dark:text-slate-50 transition-colors duration-300 relative`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ParticleBackground />
          <div className="relative z-10">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
