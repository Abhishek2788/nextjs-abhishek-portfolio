import SectionWrapper from "./SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-10 border border-white/20">
            <img
              src="/profile.png"
              alt="Profile"
              className="w-32 h-32 mx-auto rounded-full border-4 border-cyan-400 mb-6"
            />
            <h2 className="text-3xl font-bold mb-4 text-cyan-400">About Me</h2>
            <p className="text-gray-300 leading-relaxed">
              Highly motivated B.Tech graduate (Computer Science & Engineering, 2025) with a solid academic foundation and a strong passion for technology. Eager to apply technical skills in real-world projects and contribute to innovative solutions. Committed to continuous learning and professional growth, with a strong ability to adapt and thrive in dynamic team environments.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
