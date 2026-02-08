"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="bg-[#050b18] py-32">
      <div className="max-w-7xl mx-auto px-10">

        {/* Header */}
        <div className="mb-20">
          <h2 className="text-5xl font-semibold text-teal-400">
            Experience
          </h2>
          <p className="mt-2 text-xl text-zinc-400">
            Where I applied my skills in real-world development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-12">

          {/* Vertical line */}
          <div className="absolute left-3 top-0 h-full w-[2px] bg-linear-to-b from-teal-400/60 via-teal-400/20 to-transparent" />

          {/* Experience Item */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="
              relative
              mb-20
              rounded-2xl
              border border-white/10
              bg-linear-to-br from-white/6 to-white/2
              p-8
              hover:border-teal-400/40
              active:border-teal-400/40
              hover:shadow-[0_0_40px_rgba(45,212,191,0.15)]
              active:shadow-[0_0_40px_rgba(45,212,191,0.15)]
              transition-all duration-300
            "
          >
            {/* Timeline Dot */}
            {/* <div className="
              absolute -left-[52px] top-8
              h-5 w-5 rounded-full
              bg-teal-400
              shadow-[0_0_20px_rgba(45,212,191,0.9)]
            " /> */}

            {/* Content */}
            <h3 className="text-2xl font-semibold text-zinc-100">
              MERN Stack Developer Trainee
            </h3>

            <p className="mt-1 text-zinc-400">
              <span className="text-teal-400 font-medium">
                Luminar Technolab
              </span>{" "}
              • 2025
            </p>

            <div className="mt-6 space-y-4 text-zinc-300 leading-relaxed">
              <p>
                Built full-stack <span className="text-teal-400">MERN applications</span> from scratch,
                focusing on scalability, clean architecture, and real-world use cases.
              </p>

              <p>
                Designed and implemented <span className="text-teal-400">REST APIs</span>, handled authentication
                using JWT, and connected MongoDB databases with React-based frontends.
              </p>

              <p>
                Worked on production-style projects including an
                <span className="text-teal-400"> LMS platform</span> and
                <span className="text-teal-400"> Food Ordering system</span>,
                following industry coding practices.
              </p>
            </div>

            {/* Tech tags */}
            <div className="mt-6 flex flex-wrap gap-3">
              {["MongoDB", "Express", "React", "Node.js", "JWT", "REST APIs"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="
                      px-4 py-1.5
                      rounded-full
                      text-sm
                      bg-white/5
                      text-zinc-300
                      border border-white/10
                      hover:border-teal-400/50
                      active:border-teal-400/50
                      hover:text-teal-400
                      active:text-teal-400
                      transition
                    "
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
