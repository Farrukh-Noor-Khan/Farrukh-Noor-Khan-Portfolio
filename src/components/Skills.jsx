import { useState } from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const filters = ["All Skills", "Languages", "ML/AI", "Backend", "Platforms", "Tools", "Soft Skills"];
  const [activeFilter, setActiveFilter] = useState("All Skills");

  const skillCategories = {
    Languages: ["Python", "Java (Android)", "C++"],
    "ML/AI": ["PyTorch", "TensorFlow", "Keras", "scikit-learn", "NLTK"],
    Backend: ["FastAPI", "PostgreSQL", "MySQL"],
    Platforms: ["Docker", "Vercel", "Railway", "Firebase"],
    Tools: ["Git", "GitHub", "VS Code", "PyCharm", "Android Studio", "Jupyter"],
    "Soft Skills": ["Leadership", "Communication", "Problem Solving", "Research Writing"],
  };

  // Flatten all skills for "All Skills"
  const allSkills = Object.values(skillCategories).flat();

  const displayedSkills =
    activeFilter === "All Skills" ? allSkills : skillCategories[activeFilter];

  const stats = [
    { value: "5+", label: "Programming Languages" },
    { value: "10+", label: "ML Frameworks" },
    { value: "3+", label: "Years Experience" },
    { value: "15+", label: "Projects Completed" },
  ];

  return (
    <section id="skills" className="bg-[#0e0f1a] text-white py-16 px-6">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Skills & Technologies</h2>
        <p className="text-gray-400 mt-2 text-sm md:text-base">
          A comprehensive toolkit for building modern AI applications and scalable systems
        </p>
      </div>

      {/* Filters */}
      <div className="flex justify-center flex-wrap gap-4 mb-10">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 rounded-full text-sm transition-all duration-300 
              ${activeFilter === filter
                ? "bg-purple-700 text-white shadow-[0_0_10px_#9333ea]"
                : "bg-[#1c1d29] text-gray-300 hover:shadow-[0_0_10px_#9333ea] hover:text-white"}`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {displayedSkills.map((skill, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, boxShadow: "0 0 10px #9333ea" }}
            className="bg-[#1c1d29] text-gray-300 text-center rounded-full py-2 px-4 cursor-pointer transition-all"
          >
            {skill}
          </motion.div>
        ))}
      </div>

      {/* Bottom Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-6 text-gray-300">
        {stats.map((stat, idx) => (
          <div key={idx}>
            <p className="text-2xl font-bold text-blue-400">{stat.value}</p>
            <p className="text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
