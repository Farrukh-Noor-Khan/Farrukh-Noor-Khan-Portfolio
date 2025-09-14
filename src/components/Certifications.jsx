import { Award, Star, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "ML with Python",
      issuer: "freeCodeCamp",
      description:
        "Comprehensive machine learning certification covering algorithms, data preprocessing, and model evaluation.",
      icon: "🐍",
      link: "#",
    },
    {
      title: "AI Sign Language App Development",
      issuer: "AiTec",
      description:
        "Specialized certification in computer vision and gesture recognition for accessibility applications.",
      icon: "🤖",
      link: "#",
    },
    {
      title: "Data Analytics & BI",
      issuer: "DigiSkills",
      description:
        "Business intelligence and data visualization techniques for actionable insights.",
      icon: "📊",
      link: "#",
    },
    {
      title: "Fundamentals of Digital Marketing",
      issuer: "Google",
      description:
        "Digital marketing strategies and analytics for modern business growth.",
      icon: "📱",
      link: "#",
    },
    {
      title: "MATLAB Onramp",
      issuer: "MathWorks",
      description:
        "Mathematical computing and engineering problem-solving with MATLAB.",
      icon: "🔢",
      link: "#",
    },
  ];

  const awards = [
    {
      title: "Merit-Based Scholarship",
      issuer: "KICSIT",
      description:
        "Academic excellence scholarship for outstanding performance in Computer Engineering.",
      year: "2021-2025",
    },
    {
      title: "Raise Your Hack 2025",
      issuer: "Lablab.ai",
      description:
        "Recognition for innovative AI hackathon project and technical implementation.",
      year: "2025",
    },
  ];

  return (
    <section
      id="certifications"
      className="py-24 bg-gradient-to-b from-brand-surface to-brand-surface-elevated relative"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-brand-accent text-sm font-semibold tracking-widest uppercase mb-3">
            Recognition
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-4 drop-shadow">
            Certifications & Awards
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and recognition in AI, machine learning, and software
            development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-gradient-to-r from-brand-accent to-brand-primary rounded-lg shadow-glow">
                <Award className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-white">
                Certifications
              </h3>
            </div>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="relative group bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl overflow-hidden
                             hover:scale-[1.02] transition-all duration-300"
                >
                  {/* Gradient glow strip */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-brand-accent to-brand-primary"></div>

                  <div className="flex items-start gap-4 p-6">
                    <div className="text-2xl flex-shrink-0 mt-1">{cert.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-heading font-semibold text-white group-hover:text-brand-accent transition-colors">
                          {cert.title}
                        </h4>
                        {cert.link !== "#" && (
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 hover:text-brand-accent transition-colors"
                            aria-label="View Certificate"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                      <div className="text-brand-accent font-medium text-sm mb-1">
                        {cert.issuer}
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-gradient-to-r from-brand-primary to-brand-accent rounded-lg shadow-glow">
                <Star className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-white">
                Awards & Recognition
              </h3>
            </div>

            <div className="space-y-6">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="relative group bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl overflow-hidden
                             hover:scale-[1.02] transition-all duration-300"
                >
                  {/* Gradient glow strip */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-brand-primary to-brand-accent"></div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-heading font-semibold text-white group-hover:text-brand-accent transition-colors">
                        {award.title}
                      </h4>
                      <span className="text-sm text-brand-accent font-medium">
                        {award.year}
                      </span>
                    </div>
                    <div className="text-brand-primary font-medium text-sm mb-2">
                      {award.issuer}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-8 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-xl text-center">
              <h4 className="font-heading font-semibold text-white mb-4">
                Professional Growth
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-heading font-bold gradient-text mb-1">
                    5+
                  </div>
                  <div className="text-xs text-muted-foreground">Certifications</div>
                </div>
                <div>
                  <div className="text-2xl font-heading font-bold gradient-text mb-1">
                    2+
                  </div>
                  <div className="text-xs text-muted-foreground">Awards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
