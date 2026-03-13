"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import {
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  fadeInUp,
} from "@/lib/animations";

function CodeSnippet() {
  return (
    <motion.div
      variants={fadeInRight}
      className="relative w-full max-w-sm bg-slate-900 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50"
    >
      <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 dark:bg-slate-700/60 border-b border-slate-700/50">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
        <span className="ml-2 text-xs text-slate-400 font-mono">
          portfolio.js — Visual Studio Code
        </span>
      </div>
      <div className="p-5 font-mono text-sm leading-relaxed">
        {[
          {
            line: "01",
            el: (
              <>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-sky-300">developer</span>{" "}
                <span className="text-white">= {"{"}</span>
              </>
            ),
          },
          {
            line: "02",
            el: (
              <>
                <span className="text-slate-400 ml-4">name:</span>{" "}
                <span className="text-amber-300">&apos;Khaled&apos;</span>
                <span className="text-white">,</span>
              </>
            ),
          },
          {
            line: "03",
            el: (
              <>
                <span className="text-slate-400 ml-4">stack:</span>{" "}
                <span className="text-amber-300">
                  &apos;React . NextJs · NodeJs · Express · MongoDB &apos;
                </span>
                <span className="text-white">,</span>
              </>
            ),
          },
          {
            line: "04",
            el: (
              <>
                <span className="text-slate-400 ml-4">mission:</span>{" "}
                <span className="text-amber-300">
                  &apos;Scale ideas to production&apos;
                </span>
              </>
            ),
          },
          {
            line: "05",
            el: (
              <>
                <span className="text-white">{"}"}</span>
              </>
            ),
          },
          { line: "06", el: <></> },
          {
            line: "07",
            el: (
              <>
                <span className="text-sky-300">developer</span>
                <span className="text-white">.</span>
                <span className="text-green-400">buildAwesomeStuff</span>
                <span className="text-white">()</span>
              </>
            ),
          },
        ].map(({ line, el }, i) => (
          <motion.div
            key={line}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
            className="flex gap-4"
          >
            <span className="text-slate-600 select-none w-4">{line}</span>
            <span>{el}</span>
          </motion.div>
        ))}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="inline-block w-2 h-4 bg-sky-400 ml-1 align-middle"
        />
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-slate-950" />

      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-sky-200 dark:border-sky-800 bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 text-xs font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
          Available for Work
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={fadeInLeft}
              className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
            >
              <span className="text-sky-500">Full-Stack</span>
              <br />
              <span className="text-slate-900 dark:text-white">Developer</span>
            </motion.h1>

            <motion.p
              variants={fadeInLeft}
              className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-8 max-w-md"
            >
              Full-Stack Developer specializing in the MERN stack + Next.js and
              TypeScript. I build scalable, high-performance web applications
              and transform complex problems into clean, user-centric solutions.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <motion.button
                onClick={() => scrollTo("#projects")}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-sky-500 text-white font-semibold hover:bg-sky-600 transition-colors shadow-lg shadow-sky-500/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects <ArrowRight size={16} />
              </motion.button>
              <motion.a
                href="/khaled oudenani - Professional Cv Resume.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV <Download size={16} />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex justify-center lg:justify-end"
          >
            <CodeSnippet />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
