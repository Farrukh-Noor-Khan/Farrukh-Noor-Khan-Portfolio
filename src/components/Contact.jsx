import React from "react";

const Contact = () => {
  // === Local state using React only ===
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setToastMessage("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);

    // Hide toast after 3 seconds
    setTimeout(() => setToastMessage(""), 3000);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // === Inline SVG icons ===
  const icons = {
    mail: (
      <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M4 4h16v16H4V4z" strokeWidth="2" />
        <path d="M4 4l8 8 8-8" strokeWidth="2" />
      </svg>
    ),
    github: (
      <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-2c-3.2.7-3.8-1.5-3.8-1.5-.5-1.1-1.2-1.5-1.2-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1.1 1.5 1.1.9 1.5 2.5 1.1 3.1.9.1-.7.4-1.1.7-1.4-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2.9-.2 1.8-.4 2.7-.4s1.8.1 2.7.4c2.2-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.7.9 1.2 1.9 1.2 3.2 0 4.4-2.7 5.4-5.3 5.7.4.3.7.9.7 1.8v2.6c0 .3.2.6.8.5C20.2 21.4 23.5 17.1 23.5 12c0-6.3-5.2-11.5-11.5-11.5z"/>
      </svg>
    ),
    linkedin: (
      <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 2H4C2.9 2 2 2.9 2 4v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8.3 19H5.7V9h2.6v10zm-1.3-11.5C6 7.5 5 6.5 5 5.2 5 4 6 3 7.3 3c1.2 0 2.2 1 2.2 2.2 0 1.3-1 2.3-2.2 2.3zM19 19h-2.6v-5.4c0-1.3-.5-2.2-1.7-2.2-1 0-1.6.7-1.9 1.3-.1.2-.1.6-.1.9V19h-2.6V9h2.6v1.4c.4-.7 1.2-1.6 2.7-1.6 1.9 0 3.3 1.2 3.3 3.8V19z"/>
      </svg>
    ),
    send: (
      <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M22 2L11 13" strokeWidth="2" />
        <path d="M22 2L15 22L11 13L2 9L22 2Z" strokeWidth="2" />
      </svg>
    ),
  };

  return (
    <section id="contact" className="py-24 bg-brand-surface">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Toast Notification */}
        {toastMessage && (
          <div className="mb-4 p-4 bg-green-600 text-white rounded-lg text-center shadow">
            {toastMessage}
          </div>
        )}

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand-accent text-sm font-medium tracking-widest uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Build Something Amazing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Always open to discussing new opportunities, innovative projects, and collaborative ventures.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Ready to collaborate?</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm passionate about building AI solutions that create real impact. Whether you have a 
                specific project in mind or want to explore possibilities, I'd love to hear from you.
              </p>
            </div>

            {/* Links */}
            <div className="space-y-4">
              <a href="mailto:farrukhnoorkhan456@gmail.com" className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl hover:shadow-lg transition">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                  {icons.mail}
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-sm text-gray-400">farrukhnoorkhan456@gmail.com</div>
                </div>
              </a>

              <a href="https://github.com/Farrukh-Noor-Khan" target="_blank" className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl hover:shadow-lg transition">
                <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg">
                  {icons.github}
                </div>
                <div>
                  <div className="font-medium">GitHub</div>
                  <div className="text-sm text-gray-400">/Farrukh-Noor-Khan</div>
                </div>
              </a>

              <a href="https://linkedin.com/in/farrukhkhan-f12" target="_blank" className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl hover:shadow-lg transition">
                <div className="p-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg">
                  {icons.linkedin}
                </div>
                <div>
                  <div className="font-medium">LinkedIn</div>
                  <div className="text-sm text-gray-400">/in/farrukhkhan-f12</div>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="message"
                placeholder="Tell me about your project or idea..."
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg shadow hover:opacity-90 transition"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                ) : (
                  icons.send
                )}
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
