import { useState } from "react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  // Inline icons as JSX components
  const Brain = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeWidth={2} d="M12 4a4 4 0 00-4 4v1H6a2 2 0 00-2 2v3h2v3a4 4 0 008 0v-3h2v-3a2 2 0 00-2-2h-2V8a4 4 0 00-4-4z" />
    </svg>
  );

  const Code2 = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeWidth={2} d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
    </svg>
  );

  const Database = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path strokeWidth={2} d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
      <path strokeWidth={2} d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" />
    </svg>
  );

  const Github = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 .5C5.65.5.5 5.64.5 12c0 5.1 3.3 9.4 7.8 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.8-1.5-3.8-1.5-.6-1.5-1.4-2-1.4-2-1.2-.8.1-.8.1-.8 1.3.1 2 .9 2 .9 1.2 2 3.2 1.5 4 .9.1-.9.5-1.5.8-1.9-2.6-.3-5.3-1.3-5.3-6 0-1.3.5-2.3 1.1-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.1a11.5 11.5 0 016 0c2.2-1.4 3.3-1.1 3.3-1.1.6 1.6.2 2.8.1 3.1.7.8 1.1 1.8 1.1 3.1 0 4.7-2.7 5.7-5.3 6 .5.5.9 1.3.9 2.6v3.9c0 .3.2.7.8.6A11.6 11.6 0 0023.5 12C23.5 5.64 18.36.5 12 .5z" />
    </svg>
  );

  const Play = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M3 22V2l18 10L3 22z" />
    </svg>
  );

  const ExternalLink = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeWidth={2} d="M18 13v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  );

  const projects = [
    {
      title: "Monk AI - Multi-Agent Platform",
      description:
        "A GenAI platform featuring multi-agent orchestration with LLaMA 3.1, Groq API, and Coral. Built for real-time performance with low-latency backend systems.",
      category: "AI Platform",
      technologies: ["Python", "FastAPI", "LLaMA 3.1", "Groq API", "Coral", "Docker", "Vercel"],
      features: [
        "Real-time multi-agent communication",
        "Sub-200ms API response times",
        "Scalable microservices architecture",
        "Production-ready deployment",
      ],
      github: "https://github.com/Farrukh-Noor-Khan/monk-ai",
      demo: "https://monk-ai-kappa.vercel.app/",
      icon: Brain,
      gradient: "from-purple-500 to-pink-500",
      status: "Live Demo",
    },
    {
      title: "Two-Way Sign Language Translator",
      description:
        "Final Year Project implementing real-time gesture recognition and bidirectional translation using LSTM networks and computer vision.",
      category: "Computer Vision",
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "LSTM", "NumPy"],
      features: [
        "Real-time gesture recognition",
        "Bidirectional translation",
        "LSTM sequence modeling",
        "Computer vision preprocessing",
      ],
      github: "https://github.com/Farrukh-Noor-Khan/sign-language-translator",
      demo: "#",
      icon: Code2,
      gradient: "from-blue-500 to-cyan-500",
      status: "FYP",
    },
    {
      title: "Twitter Sentiment Analyzer",
      description: "Streamlit web application for real-time sentiment analysis using TF-IDF vectorization and Logistic Regression classification.",
      category: "NLP", 
      technologies: ["Python", "scikit-learn", "TF-IDF", "Streamlit", "Pandas", "NLTK"],
      features: [
        "Real-time sentiment classification",
        "TF-IDF feature extraction",
        "Interactive web interface",
        "Confidence score display"
      ],
      github: "https://github.com/Farrukh-Noor-Khan/twitter-sentiment",
      demo: "#",
      icon: Database,
      gradient: "from-green-500 to-emerald-500",
      status: "Complete"
    },
    {
      title: "Spam Detection System",
      description: "Email and SMS spam classification system using Naive Bayes algorithm with 94% accuracy on test datasets.",
      category: "Machine Learning",
      technologies: ["Python", "Naive Bayes", "scikit-learn", "Streamlit", "Pandas"],
      features: [
        "94% classification accuracy",
        "Email and SMS support",
        "Probability-based scoring",
        "Real-time detection"
      ],
      github: "https://github.com/Farrukh-Noor-Khan/spam-detector",
      demo: "#",
      icon: Code2,
      gradient: "from-red-500 to-orange-500",
      status: "Complete"
    },
    {
      title: "Movie Recommendation System",
      description: "Content-based filtering recommendation engine using cosine similarity for personalized movie suggestions.",
      category: "Recommendation",
      technologies: ["Python", "Cosine Similarity", "Pandas", "scikit-learn", "Streamlit"],
      features: [
        "Content-based filtering",
        "Cosine similarity matching",
        "Personalized recommendations",
        "Interactive movie search"
      ],
      github: "https://github.com/Farrukh-Noor-Khan/movie-recommender",
      demo: "#",
      icon: Database,
      gradient: "from-indigo-500 to-purple-500",
      status: "Complete"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-brand-surface-elevated">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand-accent text-sm font-medium tracking-widest uppercase mb-4">
            Featured Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Projects & Case Studies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From concept to deployment - showcasing AI solutions that solve real problems
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={index}
                className="relative group p-6 rounded-2xl bg-brand-surface shadow-lg hover:shadow-xl transition-all duration-300"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Icon + Status */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} shadow-lg`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <span className="px-2 py-1 bg-brand-surface rounded text-xs font-medium text-brand-accent">
                    {project.status}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-brand-accent font-medium uppercase mb-3">
                  {project.category}
                </p>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-medium text-sm mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <div className="w-1 h-1 rounded-full bg-brand-accent mt-1.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6 flex flex-wrap gap-1">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-brand-surface rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-2 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-xs text-center border rounded px-3 py-2 hover:bg-brand-primary hover:text-white transition"
                  >
                    <Github className="h-3 w-3 inline-block mr-2" />
                    Code
                  </a>
                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-xs text-center bg-brand-primary text-white rounded px-3 py-2 hover:opacity-90 transition"
                    >
                      <Play className="h-3 w-3 inline-block mr-2" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to see more projects or collaborate on something new?
          </p>
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3 rounded bg-brand-primary text-white hover:opacity-90 transition"
          >
            Let's Build Together
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
