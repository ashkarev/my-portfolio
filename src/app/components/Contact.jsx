"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { toast } from "react-toastify";

// Globe – client only
const World = dynamic(
  () => import("./ui/Globe").then((m) => m.World),
  { ssr: false }
);

export default function Contact() {
  const formRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  /* ------------------ EMAIL SEND LOGIC ------------------ */
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_ve8l4as",
        "template_nxwn525",
        formRef.current,
        "9tn_-cXWlXFo3FdqI"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          formRef.current.reset();
          setLoading(false);
        },
        (error) => {
          console.error(error);
          toast.error("Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  /* ------------------ GLOBE CONFIG ------------------ */
  const globeConfig = {
    pointSize: 4,
    showAtmosphere: true,
    atmosphereColor: "#ffffff",
    atmosphereAltitude: 0.1,
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const pickColor = () => colors[Math.floor(Math.random() * colors.length)];

  const sampleArcs = [
    { startLat: 28.6139, startLng: 77.209, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.3, color: pickColor() },
    { startLat: 22.3193, startLng: 114.1694, endLat: 40.7128, endLng: -74.006, arcAlt: 0.4, color: pickColor() },
    { startLat: 34.0522, startLng: -118.2437, endLat: 48.8566, endLng: 2.3522, arcAlt: 0.25, color: pickColor() },
  ];

  return (
    <section id="contact" className="bg-[#050b18] py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-semibold text-zinc-100">
            Get in <span className="text-teal-400">Touch</span>
          </h2>
          <p className="mt-2 text-zinc-400 max-w-xl">
            Have a project, idea, or opportunity? Let’s build something meaningful together.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT – FORM */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-4 p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md"
          >
            <Input label="Your Name" name="name" />
            <Input label="Email Address" name="email" type="email" />
            <Textarea label="Message" name="message" />

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-4 px-6 py-3 rounded-lg border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black transition-all"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>

          {/* RIGHT – GLOBE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[550px] rounded-2xl overflow-hidden"
          >
            <World data={sampleArcs} globeConfig={globeConfig} />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ------------------ INPUTS ------------------ */

function Input({ label, name, type = "text" }) {
  return (
    <div>
      <label className="text-sm text-zinc-400">{label}</label>
      <input
        name={name}
        type={type}
        required
        className="mt-2 w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 text-zinc-100 outline-none focus:border-teal-400 transition"
      />
    </div>
  );
}

function Textarea({ label, name }) {
  return (
    <div>
      <label className="text-sm text-zinc-400">{label}</label>
      <textarea
        name={name}
        rows={4}
        required
        className="mt-2 w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 text-zinc-100 outline-none focus:border-teal-400 transition resize-none"
      />
    </div>
  );
}
