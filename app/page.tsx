"use client";

import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Portfolio from "@/components/sections/Portfolio";
import Skills from "@/components/sections/Skills";
import Certificates from "@/components/sections/Certificates";
import Contact from "@/components/sections/Contact";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

export default function Home() {
  useRevealAnimation();

  return (
    <main>
      <Hero />
      <Experience />
      <Portfolio />
      <Skills />
      <Certificates />
      <Contact />
    </main>
  );
}
