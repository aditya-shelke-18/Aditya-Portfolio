"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone size={22} />,
      title: "Call Me",
      value: "+91 7499836847",
      href: "tel:+917499836847",
      color: "bg-emerald-500/10 dark:bg-emerald-400/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 dark:border-emerald-400/20",
    },
    {
      icon: <Mail size={22} />,
      title: "Email",
      value: "adityasshelke02@gmail.com",
      href: "mailto:adityasshelke02@gmail.com",
      color: "bg-primary-500/10 dark:bg-primary-400/10 text-primary-600 dark:text-primary-400 border-primary-500/20 dark:border-primary-400/20",
    },
    {
      icon: <MapPin size={22} />,
      title: "Location",
      value: "Mumbai, Maharashtra",
      href: "#",
      color: "bg-rose-500/10 dark:bg-rose-400/10 text-rose-600 dark:text-rose-400 border-rose-500/20 dark:border-rose-400/20",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-transparent relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-500/10 dark:bg-primary-400/10 text-primary-600 dark:text-primary-400 border border-primary-500/20 rounded-full text-sm font-semibold mb-4">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-cyan-400 mx-auto rounded-full mb-6" />
          <p className="text-slate-500 dark:text-slate-300 max-w-2xl mx-auto text-[15px] leading-relaxed">
            Have a project in mind or want to discuss opportunities? I&apos;m currently available for freelance work and full-time positions. Drop a message!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 flex flex-col gap-5"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                whileHover={{ scale: 1.02, x: 6 }}
                transition={{ duration: 0.25 }}
                key={index}
                href={info.href}
                className="flex items-center space-x-4 p-5 bg-white/80 dark:bg-white/[0.04] backdrop-blur-md rounded-2xl border border-slate-200/60 dark:border-white/10 hover:border-primary-500/40 dark:hover:border-primary-400/30 shadow-sm hover:shadow-lg transition-all group"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 border ${info.color}`}>
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-0.5">{info.title}</p>
                  <p className="text-slate-800 dark:text-slate-200 font-semibold text-sm break-all">{info.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <div className="p-5 bg-white/80 dark:bg-white/[0.04] backdrop-blur-md rounded-2xl border border-slate-200/60 dark:border-white/10">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-4">Follow Me</h4>
              <div className="flex space-x-3">
                <motion.a whileHover={{ scale: 1.15, y: -3 }} href="https://github.com/adityashelke" target="_blank" rel="noopener noreferrer"
                  className="w-11 h-11 bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-200 rounded-xl flex items-center justify-center hover:bg-slate-800 hover:text-white dark:hover:bg-slate-700 transition-all">
                  <Github size={18} />
                </motion.a>
                <motion.a whileHover={{ scale: 1.15, y: -3 }} href="https://linkedin.com/in/aditya-shelke" target="_blank" rel="noopener noreferrer"
                  className="w-11 h-11 bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-200 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                  <Linkedin size={18} />
                </motion.a>
                <motion.a whileHover={{ scale: 1.15, y: -3 }} href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
                  className="w-11 h-11 bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-200 rounded-xl flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all">
                  <Instagram size={18} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white/80 dark:bg-white/[0.04] backdrop-blur-md p-8 rounded-3xl border border-slate-200/60 dark:border-white/10 shadow-xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    autoComplete="off"
                    suppressHydrationWarning
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-[15px] transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    autoComplete="off"
                    suppressHydrationWarning
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-[15px] transition-all"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Your Message</label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  autoComplete="off"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-[15px] resize-none transition-all"
                  placeholder="How can I help you today?"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={submitted}
                suppressHydrationWarning
                className={`w-full md:w-auto px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg ${submitted
                  ? "bg-emerald-500 shadow-emerald-500/30 text-white"
                  : "bg-primary-500 hover:bg-primary-600 text-white shadow-primary-500/30 hover:shadow-primary-500/50"
                  }`}
              >
                {submitted ? (
                  <>
                    <CheckCircle size={18} />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
