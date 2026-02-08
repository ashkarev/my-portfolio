"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900 shadow-lg shadow-gray-800 backdrop-blur-md border-b border-white/5">
      <div className="mx-auto max-w-7xl px-10 h-16 flex items-center justify-between">

        {/* Brand */}
        <div className="text-3xl font-bold tracking-tight">
          <span className="text-zinc-100">Ash</span>
          <span className="text-teal-400">kar</span>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400 tracking-wide">
          <a href="#projects" className="hover:text-teal-400 transition-colors">
            Projects
          </a>
          <a href="#skills" className="hover:text-teal-400 transition-colors">
            Skills
          </a>
          <a href="#experience" className="hover:text-teal-400 transition-colors">
            Experience
          </a>
          <a href="#contact" className="hover:text-teal-400 transition-colors">
            Contact
          </a>
        </div>

      </div>
    </nav>
  );
}