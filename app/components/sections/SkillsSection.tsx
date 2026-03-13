"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SKILLS } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-extrabold text-slate-900 dark:text-white mb-3"
          >
            Technical Skills
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-12 h-0.5 bg-sky-500 mx-auto mb-4"
          />
          <motion.p
            variants={fadeInUp}
            className="text-slate-400 dark:text-slate-500 text-sm"
          >
            The core technologies I use to bring your visions to life.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {SKILLS.map((skill) => (
            <motion.div
              key={skill.name}
              variants={fadeInUp}
              whileHover={{
                y: -8,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className={`group relative flex flex-col items-center gap-3 p-6 rounded-2xl bg-gradient-to-br ${skill.color} border border-slate-100 dark:border-slate-800 cursor-default overflow-hidden`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ring-1 ring-inset ring-sky-400/30 rounded-2xl" />
              <span className="text-3xl">{skill.icon}</span>
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
