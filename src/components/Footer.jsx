import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#0a0f1f] via-[#0f172a] to-[#1e293b] text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Left Section - Branding */}
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Farrukh Noor Khan</h1>
          <p className="text-sm text-gray-400 leading-relaxed">
            Full-Stack Developer | Problem Solver | Innovator  
            Building scalable and modern digital experiences.
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="flex flex-col md:items-center">
          <h2 className="text-lg font-semibold text-white mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
            <li><a href="#skills" className="hover:text-blue-400 transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Right Section - Contact */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Get in Touch</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-blue-400" /> 
              <a href="mailto:farrukhnoorkhan@example.com" className="hover:text-blue-400 transition">
                farrukhnoorkhan@example.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-blue-400" /> 
              +92-300-1234567
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={18} className="text-blue-400" /> 
              Islamabad, Pakistan
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="https://github.com/farrukhnoorkhan" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <Github size={22} />
            </a>
            <a href="https://linkedin.com/in/farrukhnoorkhan" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <Linkedin size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider & Bottom Text */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {currentYear} Farrukh Noor Khan. All rights reserved.
      </div>
    </footer>
  );
}
