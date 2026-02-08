"use client";
import { motion } from "framer-motion";

/* Animation variants */
const container = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
      staggerChildren: 0.18,
    },
  },
};

const titleVariant = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const accentVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delay: 0.3, duration: 0.6 },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-900 py-32">
      <div className="max-w-7xl mx-auto px-10">

        {/* SECTION HEADER */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={titleVariant}
            className="text-5xl md:text-6xl font-semibold tracking-tight text-zinc-100"
          >
            Pro<motion.span variants={accentVariant} className="text-teal-400">jects</motion.span>
          </motion.h2>

          <p className="mt-4 text-lg text-zinc-400 max-w-xl">
            Selected <span className="text-teal-400">MERN</span> applications and
            system-level projects that demonstrate real-world problem solving.
          </p>
        </motion.div>

        <div className="mt-28 space-y-36">

          {/* PROJECT 1 — LMS */}
          <motion.div
            className="grid md:grid-cols-2 gap-20 items-center"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div>
              <motion.h3
                variants={titleVariant}
                className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100"
              >
                Learning <motion.span variants={accentVariant} className="text-teal-400">Management</motion.span> System
              </motion.h3>

              <p className="mt-6 text-lg text-zinc-400 leading-relaxed max-w-xl">
                A full-stack <span className="text-teal-400">MERN</span> LMS designed
                to manage courses, users, and roles through secure authentication
                and protected APIs. Emphasis was placed on backend architecture,
                clean data relationships, and scalable route handling.
              </p>

              <p className="mt-5 text-sm text-zinc-500 hover:text-teal-400">
                MongoDB • Express • React • Node.js • JWT
              </p>

              <div className="mt-8 flex gap-4">
                <a target="/" href="https://learning-main-amber.vercel.app/" className="px-6 py-2 border border-teal-400 text-teal-400 rounded-md hover:bg-teal-400 hover:text-black transition">
                  Live
                </a>
                <a target="/" href="https://github.com/ashkarev/learning-main" className="px-6 py-2 border border-zinc-600 text-zinc-300 rounded-md hover:border-zinc-400 transition">
                  GitHub
                </a>
              </div>
            </div>

            <img  src="lms.png" className="h-80 bg-zinc-800 rounded-lg transition-transform duration-500 ease-out hover:-translate-y-3" />
          </motion.div>

          {/* PROJECT 2 — FOOD ORDERING */}
          <motion.div
            className="grid md:grid-cols-2 gap-20 items-center"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <img src="food.jpg" className="order-2 md:order-1 h-80 bg-zinc-800 rounded-lg transition-transform duration-500 ease-out hover:-translate-y-3" />

            <div className="order-1 md:order-2">
              <motion.h3
                variants={titleVariant}
                className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100"
              >
                Food <motion.span variants={accentVariant} className="text-teal-400">Ordering</motion.span> Platform
              </motion.h3>

              <p className="mt-6 text-lg text-zinc-400 leading-relaxed max-w-xl">
                An end-to-end <span className="text-teal-400">MERN</span> food ordering
                application featuring user authentication, cart management,
                order processing, and admin-side controls. Built with a focus on
                real-world data flow between frontend and backend services.
              </p>

              <p className="mt-5 text-sm text-zinc-500 hover:text-teal-400">
                MongoDB • Express • React • Node.js
              </p>

              <div className="mt-8 flex gap-4">
                <a target="/" href="https://food-ordering-mern-lac.vercel.app/" className="px-6 py-2 border border-teal-400 text-teal-400 rounded-md hover:bg-teal-400 hover:text-black transition">
                  Live
                </a>
                <a target="/" href="https://github.com/ashkarev/food-ordering-mern" className="px-6 py-2 border border-zinc-600 text-zinc-300 rounded-md hover:border-zinc-400 transition">
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>

          {/* PROJECT 3 — KSRTC */}
          <motion.div
            className="grid md:grid-cols-2 gap-20 items-center"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div>
              <motion.h3
                variants={titleVariant}
                className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100"
              >
                KSRTC <motion.span variants={accentVariant} className="text-teal-400">Booking</motion.span> System
              </motion.h3>

              <p className="mt-6 text-lg text-zinc-400 leading-relaxed max-w-xl">
                A frontend-focused booking and management interface built using
                structured <span className="text-teal-400">JSON</span> data to
                simulate real-world transport workflows. This project emphasizes
                UI logic, state handling, and scalable component organization.
              </p>

              <p className="mt-5 text-sm text-zinc-500 hover:text-teal-400">
                React • JavaScript • JSON
              </p>

             <div className="mt-8 flex gap-4">
                <a target="/" href="https://bus-route-finder-six.vercel.app/" className="px-6 py-2 border border-teal-400 text-teal-400 rounded-md hover:bg-teal-400 hover:text-black transition">
                  Live
                </a>
                <a target="/"  href="https://github.com/ashkarev/Bus-Route-Finder" className="px-6 py-2 border border-zinc-600 text-zinc-300 rounded-md hover:border-zinc-400 transition">
                  GitHub
                </a>
              </div>
            </div>

            <img src="bus.jpg" className="h-80 bg-zinc-800 rounded-lg transition-transform duration-500 ease-out hover:-translate-y-3" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
