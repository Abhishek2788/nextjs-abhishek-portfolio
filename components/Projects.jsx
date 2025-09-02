const projects = [
  {
    title: "Portfolio",
    desc: "A modern developer portfolio built with Next.js and Tailwind.",
    img: "/project1.png",
    demo: "https://nextjs-abhishek-portfolio.vercel.app/",
    github: "https://github.com/Abhishek2788/nextjs-abhishek-portfolio.git",
  },
  {
    title: "Makhana E-Commerce",
    desc: "E-commerce platform for Bihar's Makhana using Next.js.",
    img: "/project2.png",
    demo: "https://biharmakhana.vercel.app/",
    github: "https://github.com/Abhishek2788/Bihar-s-Makhana.git",
  },
  {
    title: "Indian Saviours",
    desc: "Educational Website showing the valor of Indian armed forces using Next.js. Currently in development Mode.",
    img: "/project3.png",
    demo: "#",
    github: "https://github.com/Abhishek2788/Indian-Saviours.git",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-black">
      <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white/10 border border-white/20 rounded-xl overflow-hidden backdrop-blur-lg hover:scale-105 transition"
          >
            <img src={p.img} alt={p.title} className="w-full h-60 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-300 mb-4">{p.desc}</p>
              <div className="flex gap-4">
                <a
                  href={p.demo}
                  className="px-4 py-2 rounded-lg bg-cyan-500 hover:opacity-90 transition"
                >
                  Live Demo
                </a>
                <a
                  href={p.github}
                  className="px-4 py-2 rounded-lg border border-cyan-400 hover:bg-cyan-400/10 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
