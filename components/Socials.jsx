"use client";
import SectionWrapper from "./SectionWrapper";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

export default function SocialMedia() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // load lightweight features
  }, []);

  const socials = [
    { icon: <FaGithub />, name: "GitHub", url: "https://github.com/Abhishek2788", color: "cyan-400" },
    { icon: <FaLinkedin />, name: "LinkedIn", url: "https://www.linkedin.com/in/abhishek-jha-502b23217/", color: "blue-500" },
    { icon: <FaTwitter />, name: "Twitter", url: "https://x.com/abhishekjha2763", color: "sky-400" },
    { icon: <FaInstagram />, name: "Instagram", url: "https://www.instagram.com/abhishekjha2763/", color: "pink-500" },
  ];

  return (
    <SectionWrapper id="socialmedia">
      <div className="py-20 px-6 text-center bg-black">
        <h2 className="text-4xl font-bold text-cyan-400 mb-12">Follow Me</h2>
        <div className="flex flex-wrap justify-center gap-8 relative">
          {socials.map((social, index) => (
            <div key={index} className="relative w-28 h-28">
              {/* Particles Behind Each Card */}
              <Particles
                id={`social-particles-${index}`} // UNIQUE ID per card
                init={particlesInit}
                options={{
                  particles: {
                    number: { value: 20 },
                    color: { value: `#${social.color}` },
                    size: { value: { min: 1, max: 3 } },
                    move: { enable: true, speed: 1, direction: "none", random: true },
                    opacity: { value: 0.7 },
                  },
                  interactivity: {
                    detectsOn: "canvas",
                    events: { onHover: { enable: false }, onClick: { enable: false } },
                  },
                  detectRetina: true,
                }}
                className="absolute inset-0 -z-10"
              />

              {/* Social Card */}
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  relative flex flex-col items-center justify-center gap-2 w-full h-full p-6 rounded-2xl
                  bg-white/10 backdrop-blur-lg border border-white/20 text-white
                  transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-${social.color}
                `}
              >
                <div className={`text-4xl text-${social.color}`}>{social.icon}</div>
                <span className="font-semibold">{social.name}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
