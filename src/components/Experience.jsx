import { ExternalLink, Calendar, MapPin, Award } from "lucide-react";

const experiences = [
  {
    title: "Backend Developer / Co-Leader",
    company: "Monk AI",
    location: "Remote",
    period: "Jun 2025",
    type: "Full-time",
    description:
      "Co-developed a GenAI platform using LLaMA 3.1, Groq API, and Coral. Led multi-agent orchestration and backend integration for real-time performance.",
    achievements: [
      "Designed and implemented scalable APIs for multi-agent LLM systems",
      "Orchestrated real-time agent communication with sub-200ms latency",
      "Deployed production-ready system on Vercel with Docker containerization",
      "Led backend architecture decisions for a team of 4 developers",
    ],
    technologies: ["Python", "FastAPI", "LLaMA 3.1", "Groq API", "Coral", "Docker", "Vercel"],
    link: "https://monk-ai-kappa.vercel.app/",
    current: true,
  },
  {
    title: "ML Engineer Intern",
    company: "CodexCue",
    location: "Remote",
    period: "Sep - Oct 2024",
    type: "Internship",
    description:
      "Developed multiple ML applications focusing on NLP and recommendation systems with production-ready implementations.",
    achievements: [
      "Built Twitter sentiment analysis system using TF-IDF and Logistic Regression",
      "Implemented email/SMS spam filter with Naive Bayes achieving 94% accuracy",
      "Created movie recommendation system using cosine similarity algorithms",
      "Deployed all models as interactive Streamlit applications",
    ],
    technologies: ["Python", "scikit-learn", "TensorFlow", "NLTK", "Streamlit", "Pandas"],
  },
  {
    title: "ML Engineer Intern",
    company: "AI Technology Centre, NCP Islamabad",
    location: "Islamabad, Pakistan",
    period: "Aug - Oct 2023",
    type: "Internship",
    description:
      "Focused on computer vision and neural network optimization for large-scale image classification tasks.",
    achievements: [
      "Trained ML models on large datasets with measurable accuracy improvements",
      "Designed custom neural network architecture for image classification",
      "Optimized AI pipelines reducing processing time by 40%",
      "Contributed to research on real-time image processing systems",
    ],
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Matplotlib"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 bg-gradient-to-b from-brand-surface to-brand-surface-elevated">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <header className="text-center mb-20">
          <p className="text-brand-accent text-sm font-medium tracking-widest uppercase mb-3">
            Professional Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
            Experience & Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From ML model optimization to production AI systems — building solutions that scale globally.
          </p>
        </header>

        {/* Timeline */}
        <div className="relative">
          {/* Gradient connector line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 rounded-full 
                          bg-gradient-to-b from-brand-accent via-brand-primary to-brand-accent 
                          shadow-[0_0_25px_rgba(0,150,255,0.6)] animate-[pulse-glow_4s_infinite]
                          hidden md:block" />

          <div className="space-y-14">
            {experiences.map((exp, index) => (
              <article
                key={index}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${index * 180}ms` }}
              >
                {/* Pulsing glowing timeline dot */}
                <div
                  className="absolute left-6 w-5 h-5 rounded-full 
                             bg-gradient-to-r from-brand-accent to-brand-primary
                             shadow-[0_0_25px_rgba(0,150,255,0.8)]
                             animate-[pulse-dot_3s_infinite]
                             hidden md:block"
                  style={{ transform: "translateX(-50%)" }}
                />

                {/* Experience card */}
                <div className="md:ml-16 group">
                  <div className="relative p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-brand-accent/60 transition-all duration-300 shadow-lg">
                    {/* Hover accent glow */}
                    <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-tr from-brand-accent/10 to-transparent opacity-0 group-hover:opacity-100 blur-md transition duration-500" />

                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 relative z-10">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-white group-hover:text-brand-accent transition-colors">
                            {exp.title}
                          </h3>
                          {exp.current && (
                            <span className="px-3 py-1 bg-gradient-to-r from-brand-accent to-brand-primary rounded-full text-xs font-semibold text-white shadow-md">
                              Current
                            </span>
                          )}
                          {exp.link && (
                            <a
                              href={exp.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Visit ${exp.company} project`}
                              className="p-1 hover:text-brand-accent transition-colors"
                            >
                              <ExternalLink className="h-4 w-4 text-white" />
                            </a>
                          )}
                        </div>

                        <p className="text-lg font-semibold text-brand-accent mb-2">{exp.company}</p>

                        {/* Meta info */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" /> {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" /> {exp.location}
                          </span>
                          <span className="px-2 py-1 bg-white/20 rounded text-xs">{exp.type}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed relative z-10">{exp.description}</p>

                    {/* Achievements */}
                    <div className="mb-6 relative z-10">
                      <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                        <Award className="h-4 w-4 text-brand-accent" /> Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="relative z-10">
                      <h4 className="font-semibold text-white mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full bg-brand-accent/20 text-brand-accent text-xs font-medium shadow-sm hover:bg-brand-accent/30 transition"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
