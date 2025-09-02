import SectionWrapper from "./SectionWrapper";

export default function Skills() {
  const skills = [
    { name: "Next.js", icon: "⚡" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "JavaScript", icon: "📜" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
  ];

  return (
    <SectionWrapper id="skills">
      <div className="py-20 px-6 bg-gradient-to-b from-black via-purple-950 to-black">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-white/10 border border-white/20 backdrop-blur-lg hover:scale-105 hover:shadow-[0_0_15px_rgba(168,85,247,0.7)] transition"
            >
              <div className="text-4xl">{skill.icon}</div>
              <p className="mt-2 text-lg">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
