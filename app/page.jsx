"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <main className="bg-black text-white font-inter overflow-x-hidden">
      <Navbar />
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="socials"><Socials /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </main>
  );
}
