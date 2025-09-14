import { motion } from "framer-motion";

export default function Hero() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-screen bg-[#0a0f1f] overflow-hidden flex flex-col items-center justify-center text-center px-6">
      
      {/* Modern abstract background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,120,255,0.15)_0%,transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Floating blurred shapes */}
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 rounded-full bg-purple-500/20 blur-3xl"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-56 h-56 rounded-full bg-green-500/20 blur-3xl"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-teal-400 uppercase tracking-[0.3em] text-sm md:text-base font-semibold mb-6"
      >
        AI BEYOND THE HYPE 🚀
      </motion.p>

      {/* Name with animated gradient */}
      <h1 className="relative z-10 text-5xl md:text-7xl font-extrabold">
        <motion.span
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block bg-gradient-to-r from-green-400 via-blue-400 to-white 
                     bg-[length:300%_300%] bg-clip-text text-transparent animate-gradient"
        >
          Farrukh Noor Khan
        </motion.span>
      </h1>

      {/* Subtitle */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="relative z-10 text-gray-300 text-lg md:text-2xl mt-4"
      >
        ML Engineer • LLM Agent Builder
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="relative z-10 text-gray-400 max-w-2xl mt-6 text-sm md:text-base leading-relaxed"
      >
        Building AI systems that learn, adapt, and deliver real-world value. 
        I craft multi-agent workflows, scale APIs, and make models useful in production.  
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="relative z-10 flex gap-6 mt-10"
      >
        <button
          onClick={() => scrollToSection("projects")}
          className="px-6 py-3 rounded-xl bg-white/10 backdrop-blur-lg border border-purple-400/40 text-white font-medium shadow-md hover:bg-purple-500/20 transition"
        >
          🚀 View Projects
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="px-6 py-3 rounded-xl bg-white/10 backdrop-blur-lg border border-green-400/40 text-white font-medium shadow-md hover:bg-green-500/20 transition"
        >
          🤝 Let&apos;s Collaborate
        </button>
      </motion.div>

      {/* Social icons row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="relative z-10 flex gap-6 mt-12 text-gray-400 text-2xl"
      >
        {["ri-github-fill", "ri-linkedin-fill", "ri-twitter-x-line", "ri-mail-line"].map((icon, idx) => (
          <motion.i
            key={idx}
            className={`${icon} hover:text-white cursor-pointer transition`}
            whileHover={{ scale: 1.2, y: -3 }}
          />
        ))}
      </motion.div>

      {/* Modern scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-8 flex flex-col items-center gap-2"
      >
        <motion.div
          className="w-1 h-10 bg-gradient-to-b from-purple-400 to-green-400 rounded-full"
          animate={{ scaleY: [1, 0.5, 1], opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
        <span className="text-xs text-gray-400">scroll</span>
      </motion.div>
    </section>
  );
}
