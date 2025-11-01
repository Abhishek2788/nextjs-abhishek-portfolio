import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

export default function Skills() {
  const skills = [
    { name: "HTML5", icon: "/icons/HTML5.svg" },
    { name: "CSS", icon: "/icons/CSS3.svg" },
    { name: "JavaScript", icon: "/icons/JavaScript.svg" },
    { name: "Java", icon: "/icons/Java.svg" },
    { name: "React", icon: "/icons/React.svg" },
    { name: "Tailwind CSS", icon: "/icons/Tailwind CSS.svg" },
    { name: "Next.js", icon: "/icons/Next.js.svg" },
    { name: "Node.js", icon: "/icons/Node.js.svg" },
    { name: "Express", icon: "/icons/Express.svg" },
    { name: "SQL", icon: "/icons/Sql.svg" },
    { name: "Excel", icon: "/icons/Excel.svg" },
    { name: "PowerBI", icon: "/icons/PowerBI.svg" },
    { name: "Git", icon: "/icons/Git.svg" },
    
  ];

  return (
    <SectionWrapper id="skills">
      <div className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-white/10 border border-white/20 backdrop-blur-lg hover:scale-105 hover:shadow-[0_0_15px_rgba(168,85,247,0.7)] transition flex flex-col items-center"
            >
              <div className=""><Image src={skill.icon} alt={skill.name} width={54} height={54} /></div>
              <p className="mt-2 text-lg">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
