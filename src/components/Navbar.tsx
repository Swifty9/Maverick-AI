import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Github } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/70 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 relative z-10"
          >
            <span className="text-xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              Maverick AI
            </span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-white/80 hover:text-white transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6 transition-transform duration-500 hover:rotate-180" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {[
              { label: "Pricing", path: "/pricing" },
              { label: "Features", path: "/features" },
              { label: "About", path: "/about" },
              { label: "Contributors", path: "/contributors" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-white/70 hover:text-white transition-colors py-2 relative group"
              >
                {item.label}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
            
            <Link
              to="/login"
              className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors backdrop-blur-sm"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`lg:hidden absolute left-0 right-0 top-full ${
            scrolled ? 'bg-black/70 backdrop-blur-lg' : 'bg-black/90'
          } transition-all duration-300 border-b border-white/10 ${
            isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="container mx-auto px-6 py-4 space-y-4">
            {[
              { label: "Pricing", path: "/pricing" },
              { label: "Features", path: "/features" },
              { label: "About", path: "/about" },
              { label: "Contributors", path: "/contributors" },
              { label: "Login", path: "/login" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block text-white/70 hover:text-white transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
