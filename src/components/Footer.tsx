import { Twitter, Github, Linkedin, Youtube, Globe } from "lucide-react";

export function Footer() {
  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "/features" },
        { label: "Pricing", href: "/pricing" },
        { label: "Documentation", href: "/docs" },
        { label: "API Reference", href: "/api" },
        { label: "Status", href: "/status" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Careers", href: "/careers" },
        { label: "Press", href: "/press" },
        { label: "Partners", href: "/partners" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Community", href: "/community" },
        { label: "Contact", href: "/contact" },
        { label: "Support", href: "/support" },
        { label: "Privacy", href: "/privacy-policy" },
        { label: "Terms", href: "/terms-of-service" }
      ]
    },
    {
      title: "Developers",
      links: [
        { label: "GitHub", href: "https://github.com/Swifty9/Maverick-AI" },
        { label: "Documentation", href: "/docs" },
        { label: "API Status", href: "/api-status" },
        { label: "Open Source", href: "/open-source" }
      ]
    }
  ];

  return (
    <footer className="border-t border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold text-white mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-sm text-neutral-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Logo and Copyright */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-white font-semibold">Maverick AI</span>
              </div>
              <span className="text-neutral-400 text-sm">
                © {new Date().getFullYear()} Maverick AI. All rights reserved.
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>

            {/* Region Selector */}
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5 text-neutral-400" />
              <select className="bg-transparent text-neutral-400 text-sm border border-white/10 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="eu">European Union</option>
                <option value="asia">Asia Pacific</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
