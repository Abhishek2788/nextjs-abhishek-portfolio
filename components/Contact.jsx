import SectionWrapper from "./SectionWrapper";

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-8">Contact Me</h2>
        <form className="max-w-xl mx-auto flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-cyan-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-cyan-400"
          />
          <textarea
            placeholder="Your Message"
            className="p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-cyan-400"
            rows={5}
          />
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-90 transition mt-2">
            Send Message
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
}
