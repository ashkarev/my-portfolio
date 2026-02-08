"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.4 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gray-900 flex items-center overflow-hidden"
    >
      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0 md:left-auto md:right-0 md:w-[58%] h-full pointer-events-none z-0"
      >
        <div className="absolute inset-0 bg-linear-to-l from-[#050b18] via-[#050b18]/50 to-transparent z-20" />
        <div className="absolute inset-0 bg-[#050b18]/70 md:hidden z-20" />

        <img
          src="/me.png"
          alt="Ashkar"
          className="
            absolute
            right-[6%] md:right-[1%]
            bottom-[-10%]
            h-[130%]
            object-cover
            grayscale
            opacity-90 md:opacity-100
            z-10
          "
        />
      </motion.div>

      {/* BACKGROUND WORD */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 0.12, y: 0 }}
        transition={{ duration: 1.8, ease: "easeOut", delay: 0.6 }}
        className="
          absolute bottom-[-20px] md:bottom-[-40px]
          left-1/2 -translate-x-1/2
          text-[7rem] md:text-[18rem]
          font-extrabold tracking-tight
          text-white
          mix-blend-overlay
          select-none pointer-events-none
          whitespace-nowrap
          z-10
        "
      >
        DEVELOPER
      </motion.div>

      {/* CONTENT */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-30 w-full max-w-7xl mx-auto px-6 md:px-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className="max-w-xl text-white">

            <motion.h1 variants={item} className="text-5xl md:text-7xl font-semibold">
              Ash<span className="text-teal-400">kar S</span>
            </motion.h1>

            <motion.h1 variants={item} className="text-5xl md:text-7xl font-semibold mt-3">
              ME<span className="text-teal-400">RN</span>
            </motion.h1>

            <motion.p variants={item} className="mt-4 text-lg md:text-xl text-zinc-400">
              I specialize in building{" "}
              <span className="text-teal-400">MERN stack</span> applications with
              Node.js APIs, MongoDB databases, and React-based frontends.
              <br />
              Experienced in handling backend logic, authentication flows,
              and connecting real-world data with clean user interfaces.
            </motion.p>

            <motion.p variants={item} className="mt-2 text-base md:text-lg text-zinc-500">
              MongoDB • Express • React • Node.js
            </motion.p>

            <motion.div variants={item} className="mt-8">
              <a
                href="#projects"
                className="
                  inline-block px-6 py-3
                  border border-teal-400 text-teal-400 rounded-md
                  hover:bg-teal-400 hover:text-black
                  active:bg-teal-400 active:text-black
                  transition-colors duration-300
                "
              >
                View Projects
              </a>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
