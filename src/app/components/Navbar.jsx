"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#hero" },
   
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
     { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#050b18]/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
       <Link
  href="#hero"
  className="
    w-10 h-10
    flex items-center justify-center
    rounded-full
    bg-teal-400
    text-black
    text-xl font-bold
    shadow-[0_0_20px_rgba(45,212,191,0.6)]
    hover:scale-105
    transition
  "
>
  A
</Link>


        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8  ">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-zinc-300 hover:text-teal-400 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-teal-400 text-2xl"
          aria-label="Toggle menu"
        >
          {open ? <span>✕</span> : <span>☰</span>}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-transparent  border-t border-white/10">
          <ul className="flex flex-col items-center gap-6 py-6">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-zinc-300 text-lg hover:text-teal-400 transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
