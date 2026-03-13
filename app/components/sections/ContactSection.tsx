// "use client";

// import { useRef, useState } from "react";
// import { motion, useInView } from "framer-motion";
// import { Mail, Linkedin, MapPin, Send } from "lucide-react";
// import { CONTACT_INFO } from "@/lib/data";
// import { fadeInUp, staggerContainer } from "@/lib/animations";

// const iconMap: Record<string, React.ReactNode> = {
//   email: <Mail size={20} />,
//   linkedin: <Linkedin size={20} />,
//   location: <MapPin size={20} />,
// };

// export default function ContactSection() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-80px" });
//   const [sending, setSending] = useState(false);
//   const [sent, setSent] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setSending(true);
//     await new Promise((r) => setTimeout(r, 1500));
//     setSending(false);
//     setSent(true);
//     setTimeout(() => setSent(false), 3000);
//   };

//   return (
//     <section
//       id="contact"
//       ref={ref}
//       className="py-24 bg-white dark:bg-slate-950"
//     >
//       <div className="max-w-2xl mx-auto px-6">
//         <motion.div
//           variants={staggerContainer}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           className="text-center mb-14"
//         >
//           <motion.h2
//             variants={fadeInUp}
//             className="text-3xl font-extrabold text-slate-900 dark:text-white mb-3"
//           >
//             Let&apos;s Talk Business
//           </motion.h2>
//           <motion.div
//             variants={fadeInUp}
//             className="w-12 h-0.5 bg-sky-500 mx-auto mb-4"
//           />
//           <motion.p variants={fadeInUp} className="text-slate-400 text-sm">
//             Have a project in mind? Reach out and let&apos;s start building
//             together.
//           </motion.p>
//         </motion.div>

//         <motion.div
//           variants={staggerContainer}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           className="grid grid-cols-3 gap-4 mb-10"
//         >
//           {CONTACT_INFO.map((info) => (
//             <motion.a
//               key={info.label}
//               href={info.href}
//               variants={fadeInUp}
//               whileHover={{ y: -4 }}
//               className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-center hover:border-sky-200 dark:hover:border-sky-800 transition-colors group"
//             >
//               <span className="w-10 h-10 rounded-full bg-sky-50 dark:bg-sky-950/50 text-sky-500 flex items-center justify-center group-hover:bg-sky-100 dark:group-hover:bg-sky-900/50 transition-colors">
//                 {iconMap[info.icon]}
//               </span>
//               <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">
//                 {info.label}
//               </p>
//               <p className="text-xs text-slate-400 dark:text-slate-500 break-all">
//                 {info.value}
//               </p>
//             </motion.a>
//           ))}
//         </motion.div>

//         <motion.form
//           variants={staggerContainer}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           onSubmit={handleSubmit}
//           className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 space-y-4"
//         >
//           <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="John Doe"
//                 required
//                 className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-sm placeholder:text-slate-300 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
//               />
//             </div>
//             <div>
//               <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 placeholder="john@example.com"
//                 required
//                 className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-sm placeholder:text-slate-300 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
//               />
//             </div>
//           </motion.div>

//           <motion.div variants={fadeInUp}>
//             <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">
//               Message
//             </label>
//             <textarea
//               rows={4}
//               placeholder="Tell me about your project..."
//               required
//               className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-sm placeholder:text-slate-300 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-400 transition resize-none"
//             />
//           </motion.div>

//           <motion.div variants={fadeInUp}>
//             <motion.button
//               type="submit"
//               disabled={sending || sent}
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.97 }}
//               className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold text-sm transition-colors disabled:opacity-70 shadow-lg shadow-sky-500/25"
//             >
//               {sent ? (
//                 "✓ Message Sent!"
//               ) : sending ? (
//                 <>
//                   <motion.span
//                     animate={{ rotate: 360 }}
//                     transition={{
//                       repeat: Infinity,
//                       duration: 0.8,
//                       ease: "linear",
//                     }}
//                     className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
//                   />
//                   Sending...
//                 </>
//               ) : (
//                 <>
//                   Send Message <Send size={15} />
//                 </>
//               )}
//             </motion.button>
//           </motion.div>
//         </motion.form>
//       </div>
//     </section>
//   );
// }

"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Linkedin, MapPin, Send } from "lucide-react";
import { CONTACT_INFO } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import useWeb3Forms from "@web3forms/react";

const iconMap: Record<string, React.ReactNode> = {
  email: <Mail size={20} />,
  linkedin: <Linkedin size={20} />,
  location: <MapPin size={20} />,
};

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { submit } = useWeb3Forms({
    access_key: "cc082ddc-d2ab-4fd7-9dc5-95f68c9aa30d", // ← ضع مفتاحك هنا
    settings: {
      from_name: "Portfolio Contact",
      subject: "New Message from Portfolio",
    },
    onSuccess: () => {
      setSending(false);
      setSent(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    },
    onError: () => {
      setSending(false);
      setError(true);
      setTimeout(() => setError(false), 4000);
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(false);
    await submit(formData);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 bg-white dark:bg-slate-950"
    >
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-extrabold text-slate-900 dark:text-white mb-3"
          >
            Let&apos;s Talk Business
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-12 h-0.5 bg-sky-500 mx-auto mb-4"
          />
          <motion.p variants={fadeInUp} className="text-slate-400 text-sm">
            Have a project in mind? Reach out and let&apos;s start building
            together.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-3 gap-4 mb-10"
        >
          {CONTACT_INFO.map((info) => (
            <motion.a
              key={info.label}
              href={info.href}
              target={info.href.startsWith("mailto:") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-center hover:border-sky-200 dark:hover:border-sky-800 transition-colors group"
            >
              <span className="w-10 h-10 rounded-full bg-sky-50 dark:bg-sky-950/50 text-sky-500 flex items-center justify-center group-hover:bg-sky-100 dark:group-hover:bg-sky-900/50 transition-colors">
                {iconMap[info.icon]}
              </span>
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                {info.label}
              </p>
              <p className="text-xs text-slate-400 dark:text-slate-500 break-all">
                {info.value}
              </p>
            </motion.a>
          ))}
        </motion.div>

        <motion.form
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          onSubmit={handleSubmit}
          className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 space-y-4"
        >
          <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-sm placeholder:text-slate-300 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-sm placeholder:text-slate-300 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
              />
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Tell me about your project..."
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-sm placeholder:text-slate-300 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-400 transition resize-none"
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <motion.button
              type="submit"
              disabled={sending || sent}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold text-sm transition-colors disabled:opacity-70 shadow-lg shadow-sky-500/25"
            >
              {sent ? (
                "✓ Message Sent!"
              ) : error ? (
                "✗ Failed, Try Again"
              ) : sending ? (
                <>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 0.8,
                      ease: "linear",
                    }}
                    className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                  />
                  Sending...
                </>
              ) : (
                <>
                  Send Message <Send size={15} />
                </>
              )}
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}
