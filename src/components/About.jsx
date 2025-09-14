import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full flex justify-center items-center py-20 bg-[#0a0f1f] text-white"
    >
      <div className="max-w-5xl w-full px-6">
        {/* Headings */}
        <div className="text-center mb-12">
          <p className="text-sm md:text-base font-semibold text-green-400 tracking-widest uppercase">
            About Me
          </p>
          <h2 className="mt-2 text-4xl md:text-5xl font-extrabold text-white">
            Building AI That Matters
          </h2>
        </div>

        {/* Main Card */}
        <div className="bg-[#101522] rounded-2xl shadow-2xl p-10 text-center space-y-10">
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            BS Computer Engineering graduate with hands-on experience in ML,
            Python development, and LLM agent orchestration. I specialize in
            building scalable AI systems that solve real-world problems and
            deliver measurable impact.
          </p>

          {/* Circles Section */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            {/* ML */}
            <div className="flex flex-col items-center text-center max-w-[250px]">
              <div className="relative flex items-center justify-center">
                {/* Halo */}
                <div className="absolute w-20 h-20 rounded-full bg-purple-500 opacity-30 blur-2xl animate-pulse"></div>
                {/* Circle */}
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-tr from-purple-600 to-purple-400 font-bold text-lg shadow-lg">
                  ML
                </div>
              </div>
              <h3 className="mt-4 font-semibold">Model Training</h3>
              <p className="text-sm text-gray-400">
                Trained ML models on large datasets with significant accuracy
                improvements.
              </p>
            </div>

            {/* API */}
            <div className="flex flex-col items-center text-center max-w-[250px]">
              <div className="relative flex items-center justify-center">
                {/* Halo */}
                <div className="absolute w-20 h-20 rounded-full bg-green-500 opacity-30 blur-2xl animate-pulse"></div>
                {/* Circle */}
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-tr from-green-600 to-green-400 font-bold text-lg shadow-lg">
                  API
                </div>
              </div>
              <h3 className="mt-4 font-semibold">Fast APIs</h3>
              <p className="text-sm text-gray-400">
                Built and deployed AI pipelines that meaningfully reduced
                processing time.
              </p>
            </div>

            {/* AI */}
            <div className="flex flex-col items-center text-center max-w-[250px]">
              <div className="relative flex items-center justify-center">
                {/* Halo */}
                <div className="absolute w-20 h-20 rounded-full bg-pink-500 opacity-30 blur-2xl animate-pulse"></div>
                {/* Circle */}
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-tr  from-purple-600 to-purple-400 font-bold text-lg shadow-lg">
                  AI
                </div>
              </div>
              <h3 className="mt-4 font-semibold">Multi-Agent Systems</h3>
              <p className="text-sm text-gray-400">
                Co-led GenAI multi-agent project with LLaMA 3.1, Groq, and Coral
                for production.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
