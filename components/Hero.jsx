"use client";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // load slim features for performance
  }, []);

  return (
    <section className="relative flex items-center justify-center h-screen bg-black text-center overflow-hidden">
      
      {/* Particles Background */}
      <Particles
        id="hero-particles"
        init={particlesInit}
        options={{
          background: { color: "#000000" },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "trail" },
              onClick: { enable: true, mode: "push" },
              resize: true,
            },
            modes: {
              trail: {
                delay: 0.005,
                quantity: 5,
                particles: {
                  color: { value: ["#06b6d4", "#a855f7", "#3b82f6"] },
                  opacity: { value: 0.6 },
                  size: { value: { min: 1, max: 4 } },
                  move: { speed: 1, decay: 0.02 },
                },
              },
              push: { quantity: 3 },
            },
          },
          particles: {
            color: { value: ["#06b6d4", "#a855f7", "#3b82f6"] },
            links: {
              enable: true,
              color: "#06b6d4",
              distance: 150,
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              parallax: { enable: true, force: 50, smooth: 20 },
            },
            number: { value: 80, density: { enable: true, area: 800 } },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 4 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0" // ensures particles are behind content
      />
      
      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 px-6"
      >
        <h1 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
          Hi, I'm Abhishek Jha
        </h1>
        <p className="mt-4 font-bold text-[14px] sm:text-xl md:text-2xl text-gray-300">
          Software Developer | Data Analyst | Tech Enthusiast
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-90 transition"
          >
            View Work
          </a>
          <a
            href="https://docs.google.com/document/d/1MR9pdsu-oUD7u8QpdJJ3Maduv4nAQF81T9aGgt9h2cY/edit?usp=sharing" target="_blank"
            className="px-6 py-3 rounded-xl border border-cyan-400 hover:bg-cyan-400/10 transition"
          >
            Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
