"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Image from "next/image";
import { PROJECTS } from "@/lib/data";

export default function Portfolio() {

  return (
    <section id="portfolio" className="py-24 bg-transparent relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-500/10 dark:bg-primary-400/10 text-primary-600 dark:text-primary-400 border border-primary-500/20 rounded-full text-sm font-semibold mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
            My Recent Work
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/80 dark:bg-white/[0.04] backdrop-blur-md rounded-3xl overflow-hidden border border-slate-200/60 dark:border-white/10 shadow-lg hover:shadow-2xl hover:shadow-primary-500/10 dark:hover:shadow-primary-400/10 hover:border-primary-500/40 dark:hover:border-primary-400/30 transition-all duration-400 group flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="relative h-52 w-full overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={() => {}}
                  />
                ) : null}
                {/* Fallback / overlay gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-${project.image ? '0' : '100'} transition-opacity`} />
                
                {/* Hover overlay with links */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white text-slate-900 rounded-full hover:bg-primary-500 hover:text-white transition-all shadow-lg translate-y-6 group-hover:translate-y-0 duration-300"
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white text-slate-900 rounded-full hover:bg-primary-500 hover:text-white transition-all shadow-lg translate-y-6 group-hover:translate-y-0 duration-300 delay-75"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-[11px] font-bold text-primary-600 dark:text-primary-400 uppercase tracking-widest mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-snug">
                  {project.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-300 text-sm mb-5 flex-grow leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-slate-100 dark:bg-white/[0.06] text-slate-600 dark:text-slate-200 text-xs font-semibold rounded-lg border border-slate-200/60 dark:border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.live}
                  className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 transition-colors text-sm mt-auto group/link"
                >
                  <span>View Details</span>
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
