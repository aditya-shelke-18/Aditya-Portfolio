"use client";

import { motion } from "framer-motion";
import { Calendar, Building, MapPin, GraduationCap, Briefcase } from "lucide-react";
import { EXPERIENCES, EDUCATIONS } from "@/lib/data";

interface TimelineItem {
  title: string;
  subtitle: string;
  duration: string;
  location?: string;
  description?: string[];
  type: "experience" | "education";
}

interface TimelineProps {
  title: string;
  icon: React.ReactNode;
  color: string;
  items: TimelineItem[];
}

function Timeline({ title, icon, color, items }: TimelineProps) {
  return (
    <div>
      <div className="flex items-center space-x-3 mb-8">
        <div className={`w-11 h-11 rounded-2xl ${color} flex items-center justify-center text-white shadow-lg`}>
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h3>
      </div>

      <div className="relative pl-8">
        {/* Vertical timeline line */}
        <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary-500 via-primary-400 to-transparent dark:from-primary-400 dark:via-primary-500" />

        <div className="space-y-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ x: 6 }}
              className="relative"
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.2, duration: 0.3, type: "spring" }}
                className="absolute -left-[22px] top-3 w-4 h-4 rounded-full bg-primary-500 dark:bg-primary-400 border-2 border-white dark:border-black shadow-md shadow-primary-500/30"
              />

              {/* Card */}
              <div className="bg-white/80 dark:bg-white/[0.04] backdrop-blur-md rounded-2xl p-6 border border-slate-200/60 dark:border-white/10 hover:border-primary-500/40 dark:hover:border-primary-400/40 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                      {item.title}
                    </h4>
                    <div className="flex items-center space-x-1.5 mt-1">
                      <Building size={13} className="text-primary-500 dark:text-primary-400 flex-shrink-0" />
                      <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 items-start sm:items-end">
                    <span className="inline-flex items-center space-x-1 px-3 py-1 bg-primary-500/10 dark:bg-primary-400/10 text-primary-700 dark:text-primary-300 text-xs font-bold rounded-full border border-primary-500/20 dark:border-primary-400/20 whitespace-nowrap">
                      <Calendar size={11} />
                      <span>{item.duration}</span>
                    </span>
                    {item.location && (
                      <span className="inline-flex items-center space-x-1 text-slate-400 dark:text-slate-400 text-xs">
                        <MapPin size={11} />
                        <span>{item.location}</span>
                      </span>
                    )}
                  </div>
                </div>

                {item.description && item.description.length > 0 && (
                  <ul className="space-y-1.5 mt-3">
                    {item.description.map((point, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-slate-500 dark:text-slate-300 leading-relaxed">
                        <span className="text-primary-500 dark:text-primary-400 mt-1.5 flex-shrink-0">▸</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ExperienceEducation() {
  const experiences = EXPERIENCES;
  const educations = EDUCATIONS;

  return (
    <section id="resume" className="py-24 bg-transparent relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-500/10 dark:bg-primary-400/10 text-primary-600 dark:text-primary-400 border border-primary-500/20 rounded-full text-sm font-semibold mb-4">
            Resume
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
            My Experience & Education
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Timeline
              title="Work Experience"
              icon={<Briefcase size={20} />}
              color="bg-primary-500 dark:bg-primary-600"
              items={experiences}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Timeline
              title="Education"
              icon={<GraduationCap size={20} />}
              color="bg-violet-500 dark:bg-violet-600"
              items={educations}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
