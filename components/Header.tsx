"use client";

import { useEffect, useState } from "react";

const NAV_IDS = ["hero", "experience", "portfolio", "skills", "certificates", "contact"];

export default function Header() {
  const [dark, setDark] = useState(false);
  const [mm, setMm] = useState(false);
  const [sc, setSc] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const initialDark =
      stored === "dark" ||
      (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDark(initialDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const onScroll = () => {
      setSc(window.scrollY > 20);
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 60;
      if (atBottom) {
        setActiveSection("contact");
        return;
      }
      for (const id of [...NAV_IDS].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 130) {
          setActiveSection(id);
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinkClass = (id: string) =>
    `nl text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors ${
      activeSection === id ? "on !text-zinc-900 dark:!text-white" : ""
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        sc ? "bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md shadow-sm shadow-black/5" : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between" aria-label="Main navigation">
        <a href="#hero" className="font-display font-bold text-xl tracking-tight relative z-10">
          <span className="text-zinc-900 dark:text-white">Sona</span>{" "}
          <span className="text-accent">Rianda</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm" role="list">
          {NAV_IDS.slice(1).map((id) => (
            <li key={id}>
              <a href={`#${id}`} className={navLinkClass(id)}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            aria-label={dark ? "Light mode" : "Dark mode"}
          >
            {!dark ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            )}
          </button>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 shimmer bg-accent text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-accent-light transition-colors"
          >
            Hire me
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <button
            onClick={() => setMm(!mm)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800"
            aria-expanded={mm}
            aria-label="Toggle menu"
          >
            {!mm ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {mm && (
        <div className="md:hidden bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900">
          <ul className="flex flex-col px-6 py-5 gap-4 text-sm font-medium" role="list">
            {NAV_IDS.slice(1).map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setMm(false)}
                  className="block text-zinc-700 dark:text-zinc-300 hover:text-accent transition-colors"
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
            <li className="pt-2 border-t border-zinc-100 dark:border-zinc-900">
              <a
                href="#contact"
                onClick={() => setMm(false)}
                className="inline-flex shimmer bg-accent text-white font-medium text-sm px-5 py-2.5 rounded-full"
              >
                Hire me →
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
