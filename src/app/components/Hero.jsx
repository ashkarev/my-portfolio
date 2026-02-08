"use client";

import { motion } from "framer-motion";


export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen bg-gray-900 flex items-center overflow-hidden">

      {/* BIG BACKGROUND WORD */}
     <div className="
  absolute bottom-[-20px] md:bottom-[-40px]
  left-1/2 -translate-x-1/2
  text-[7rem] md:text-[18rem]
  font-extrabold tracking-tight
  text-white/5 select-none pointer-events-none
  whitespace-nowrap
">
  DEVELOPER
</div>

      <div className="w-full max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center max-w-xl text-white">

            {/* NAME — smooth mask reveal (slow) */}
            <motion.h1
              className="text-6xl md:text-7xl font-semibold tracking-tight text-zinc-100 overflow-hidden"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
            >
              Ash<span className="text-teal-400">kar S</span>
            </motion.h1>

            {/* MERN — static (confidence) */}
            <h1 className="text-6xl md:text-7xl font-semibold tracking-tight text-zinc-100 mt-3">
              ME<span className="text-teal-400">RN</span>
            </h1>

            {/* DESCRIPTION — static (readability first) */}
            <p className="mt-4 text-xl text-zinc-400">
              I specialize in building{" "}
              <span className="text-teal-400">MERN stack</span> applications with
              Node.js APIs, MongoDB databases, and React-based frontends.
              <br />
              Experienced in handling backend logic, authentication flows,
              and connecting real-world data with clean user interfaces.
            </p>

            <p className="mt-2 text-lg text-zinc-500 hover:text-teal-400">
              MongoDB • Express • React • Node.js
            </p>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="#projects"
                className="
                  inline-block px-6 py-3
                  border border-teal-400 text-teal-400 rounded-md
                  hover:bg-teal-400 hover:text-black
                  transition-colors duration-300
                "
              >
                View Projects
              </a>
            </div>
          </div>

          {/* RIGHT SIDE (image placeholder) */}
   {/* RIGHT SIDE IMAGE */}


 

 




        </div>
      </div>
    </section>
  );
}
