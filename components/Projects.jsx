const projects = [
  {
    title: "Fullstack E-Commerce",
    desc: "This is a full-stack eCommerce web application built using React (Vite) for the frontend and admin panel, and Express (Node.js) for the backend.",
    img: "/project9.png",
    demo: "#",
    github: "https://github.com/Abhishek2788/urban-ecommerce-fullstack.git",
  },
  {
    title: "Makhana E-Commerce",
    desc: "E-commerce platform for Bihar's Makhana using Next.js. Features include product browsing, detailed views, and a responsive design.",
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
  {
    title: "Product based Project",
    desc: "The project focuses on showcasing alcoholic drinks and cocktails with a modern and interactive design. It includes features like drink search, detailed recipe views, and a responsive layout. Built with Next.js, Tailwind CSS, and JavaScript.",
    img: "/project4.png",
    demo: "https://buzzlab-world-of-drinks.vercel.app/",
    github: "https://github.com/Abhishek2788/buzzlab-world-of-drinks.git",
  },
  {
    title: "Gaming Tournament Platform",
    desc: "Built with Next.js (App Router), Tailwind CSS, and JavaScript to deliver a responsive, high-performance, and gaming-themed user experience.",
    img: "/project5.png",
    demo: "https://gamehok-assignment-nine.vercel.app/",
    github: "https://github.com/Abhishek2788/gamehok-assignment.git",
  },
  {
    title: "Sales Dashboard",
    desc: "This project is a sales dashboard buil using excel. It provides a comprehensive overview of sales performance, trends, and key metrics.",
    img: "/project6.png",
    demo: "#",
    github: "https://github.com/Abhishek2788/Sales-Analysis-project-Excel.git",
  },
  {
    title: "Superstore Sales Dashboard",
    desc: "This project is a sales dashboard built using Excel. It provides comprehensive overview of superstore sales performance, trends, and key metrics. Here, I organized and processed the dataset to uncover trends in sales, profitability, delivery performance, and regional demand.",
    img: "/project7.png",
    demo: "#",
    github: "https://github.com/Abhishek2788/Excel-Data-Analyst-Sales_Dashboard.git",
  },
  {
    title: "Bookstore SQL Project",
    desc: "This project showcases SQL skills using PostgreSQL, focusing on solving basic to advanced SQL queries on a Book Database. The project covers everything from filtering and aggregation to grouping and joins. The aim is to simulate a small-scale bookstore database, analyze data patterns, and extract meaningful insights using SQL.",
    img: "/project8.png",
    demo: "#",
    github: "https://github.com/Abhishek2788/SQL-Booksdatabase.git",
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
