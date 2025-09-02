export default function Footer() {
  return (
    <footer className="py-6 bg-black border-t border-white/20 text-center text-gray-400">
      © {new Date().getFullYear()} Abhishek. All rights reserved.
      <div className="mt-2 flex justify-center gap-6">
        <a href="#" className="hover:text-cyan-400 transition">LinkedIn</a>
        <a href="#" className="hover:text-purple-400 transition">GitHub</a>
        <a href="#" className="hover:text-blue-400 transition">Twitter</a>
      </div>
    </footer>
  );
}
