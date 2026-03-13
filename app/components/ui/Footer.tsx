"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-sky-500 text-white text-xs font-bold flex items-center justify-center">
            MK
          </span>
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            Portfolio
          </span>
        </div>
        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} Mohammed. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          {[
            {
              href: "https://github.com",
              icon: <Github size={16} />,
              label: "GitHub",
            },
            {
              href: "https://linkedin.com",
              icon: <Linkedin size={16} />,
              label: "LinkedIn",
            },
          ].map(({ href, icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ y: -3, scale: 1.1 }}
              className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-sky-500 hover:bg-sky-50 dark:hover:bg-sky-950/50 flex items-center justify-center transition-colors"
            >
              {icon}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
