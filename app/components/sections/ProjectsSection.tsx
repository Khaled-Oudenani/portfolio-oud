"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Image from "next/image";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 dark:hover:shadow-slate-900/60 transition-shadow duration-300"
    >
      <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700">
        <Image
          src={project.image}
          fill
          alt={project.title}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-sky-500/0 group-hover:bg-sky-500/10 transition-colors duration-300" />
      </div>

      <div className="p-5">
        <div className="flex gap-2 mb-3 flex-wrap">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-0.5 rounded-full bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 font-medium border border-sky-100 dark:border-sky-900"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">
          {project.title}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>
        <div className="flex gap-3">
          <motion.a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 hover:text-sky-500 transition-colors font-medium"
            whileHover={{ x: 2 }}
          >
            <ExternalLink size={14} /> Demo
          </motion.a>
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 hover:text-sky-500 transition-colors font-medium"
            whileHover={{ x: 2 }}
          >
            <Github size={14} /> GitHub
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2"
            >
              Selected Works
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-400 text-sm">
              A showcase of recent applications built from scratch.
            </motion.p>
          </div>
          <motion.a
            variants={fadeInUp}
            href="#"
            className="text-sky-500 text-sm font-semibold hover:underline whitespace-nowrap"
          >
            View All Projects →
          </motion.a>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
