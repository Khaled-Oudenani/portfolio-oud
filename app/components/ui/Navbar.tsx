"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: "smooth" });
    }, 100);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <motion.a
          href="#"
          className="flex items-center gap-2 font-bold text-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="w-8 h-8 rounded-lg bg-sky-500 text-white text-sm font-bold flex items-center justify-center">
            K/O
          </span>
          <span className="text-slate-800 dark:text-white">Oudenani</span>
        </motion.a>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item, i) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.07 }}
            >
              <button
                onClick={() => scrollTo(item.href)}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
              >
                {item.label}
              </button>
            </motion.li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {mounted && (
            <motion.button
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="w-9 h-9 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {resolvedTheme === "dark" ? (
                  <motion.span
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun size={16} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon size={16} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          )}

          <motion.button
            onClick={() => scrollTo("#contact")}
            className="hidden md:flex items-center px-4 py-2 rounded-full bg-sky-500 text-white text-sm font-semibold hover:bg-sky-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.button>

          <button
            className="md:hidden w-9 h-9 flex items-center justify-center text-slate-600 dark:text-slate-300"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 overflow-hidden"
          >
            <ul className="px-6 py-4 flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="text-slate-700 dark:text-slate-200 font-medium hover:text-sky-500 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => scrollTo("#contact")}
                  className="px-4 py-2 rounded-full bg-sky-500 text-white text-sm font-semibold"
                >
                  Hire Me
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
