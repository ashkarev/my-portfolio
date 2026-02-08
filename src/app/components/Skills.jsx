"use client";

import { motion } from "framer-motion";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiGit,
  SiJsonwebtokens,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "MongoDB", icon: SiMongodb },
    { name: "Express.js", icon: SiExpress },
    { name: "React", icon: SiReact },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "JWT Auth", icon: SiJsonwebtokens },
    { name: "Git & GitHub", icon: SiGit },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="skills" className="bg-[#050b18] py-28">
      <div className="max-w-7xl mx-auto px-10">

        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl font-semibold text-teal-400">
            Skills
          </h2>
          <p className="mt-2 text-xl text-zinc-400">
            Technologies I work with
          </p>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                variants={item}
                whileHover={{ y: -4 }}
                whileTap={{ y: -4 }}
                className="
                  group
                  h-32
                  rounded-2xl
                  border border-white/10
                  bg-linear-to-b from-white/4 to-white/1
                  flex flex-col items-center justify-center gap-3
                  transition-all duration-300
                  hover:border-teal-400/40
                  active:border-teal-400/40
                "
              >
                <Icon
                  className="
                    w-8 h-8
                    text-zinc-400
                    transition-colors duration-300
                    group-hover:text-teal-400
                    group-active:text-teal-400
                  "
                />

                <span
                  className="
                    text-sm font-medium tracking-wide
                    text-zinc-300
                    transition-colors duration-300
                    group-hover:text-zinc-100
                    group-active:text-zinc-100
                  "
                >
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
