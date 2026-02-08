"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050b18] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Left */}
          <p className="text-sm text-zinc-400 text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="text-zinc-200 font-medium">Ashkar</span>.
            All rights reserved.
          </p>

          {/* Center */}
          <p className="text-sm text-zinc-500 text-center">
            Built with <span className="text-teal-400">Next.js</span> &{" "}
            <span className="text-teal-400">Tailwind CSS</span>
          </p>

          {/* Right – Icons */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/ashkarev"
              target="_blank"
              className="text-zinc-400 hover:text-teal-400 active:text-teal-400 transition"
            >
              <Github size={25} />
            </a>

            <a
              href="https://www.linkedin.com/in/ashkar-s/"
              target="_blank"
              className="text-zinc-400 hover:text-teal-400 active:text-teal-400 transition"
            >
              <Linkedin size={25} />
            </a>

            <a
              href="mailto:ashkars178@gmail.com"
              className="text-zinc-400 hover:text-teal-400 active:text-teal-400 transition"
            >
              <Mail size={25} />
            </a>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}
