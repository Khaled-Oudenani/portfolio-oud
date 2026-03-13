"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { STATS } from "@/lib/data";
import {
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  scaleIn,
} from "@/lib/animations";
import khaled from "@/public/khaled.png";
import Image from "next/image";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={fadeInLeft} className="relative">
            <div className="relative w-full max-w-sm mx-auto">
              {/* <div className="absolute -inset-3 rounded-3xl border-2 border-sky-200 dark:border-sky-800/50 -rotate-3" />
              <div className="absolute -inset-3 rounded-3xl border-2 border-slate-200 dark:border-slate-700/50 rotate-3" />

              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-sky-100 to-teal-50 dark:from-slate-800 dark:to-slate-700 aspect-[4/5] flex items-center justify-center shadow-xl">
                <div className="text-center">
                  <Image
                    src={khaled}
                    alt="Khaled Oudenani"
                    className="w-full h-auto rounded-full object-cover"
                  />
                </div>
              </div> */}

              <div className="relative w-full max-w-xs mx-auto">
                <div className="absolute -inset-3 rounded-3xl border-2 border-sky-200 dark:border-sky-800/50 -rotate-3" />
                <div className="absolute -inset-3 rounded-3xl border-2 border-slate-200 dark:border-slate-700/50 rotate-3" />
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-sky-200 to-teal-100 dark:from-slate-800 dark:to-slate-600 aspect-square flex items-center justify-center shadow-xl">
                  <Image
                    src={khaled}
                    alt="Khaled Oudenani"
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInRight}>
            <motion.h2
              variants={fadeInRight}
              className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight"
            >
              Crafting robust digital experiences
              <span className="text-sky-500"> from Algeria</span>
            </motion.h2>
            <motion.p
              variants={fadeInRight}
              className="text-slate-500 dark:text-slate-400 leading-relaxed mb-10 text-base"
            >
              Hello! I&apos;m a passionate full-stack developer with a focus on
              building scalable web applications. I love bridging the gap
              between design and development, ensuring a seamless user
              experience backed by powerful technology.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-3 gap-6"
            >
              {STATS.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={scaleIn}
                  className="text-center"
                >
                  <motion.p
                    className="text-3xl font-extrabold text-sky-500"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, ease: "backOut", delay: 0.4 }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-sm text-slate-400 dark:text-slate-500 mt-1 font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
