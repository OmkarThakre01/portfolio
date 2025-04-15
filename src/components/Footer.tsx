import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-foreground text-white/70">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} Omkar. All rights reserved.</p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
