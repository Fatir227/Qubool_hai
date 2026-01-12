import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Gallery", path: "/gallery" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-maroon-900 text-cream border-b-4 border-gold-500 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 group"
            >
              <div className="text-gold-500 font-script text-3xl font-bold">
                ✨
              </div>
              <div>
                <div className="text-2xl font-serif font-bold text-cream group-hover:text-gold-400 transition-colors">
                  Eternal Union
                </div>
                <div className="text-xs text-gold-400 font-script">
                  Arabian Weddings
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-serif font-semibold text-sm uppercase tracking-wide transition-colors ${
                    isActive(link.path)
                      ? "text-gold-400"
                      : "text-cream hover:text-gold-400"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-cream hover:text-gold-400 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-6 pt-6 border-t border-maroon-700 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-serif font-semibold text-sm uppercase tracking-wide transition-colors ${
                    isActive(link.path)
                      ? "text-gold-400"
                      : "text-cream hover:text-gold-400"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-maroon-900 text-cream border-t-4 border-gold-500 mt-20">
        <div className="container mx-auto px-4 py-16">
          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-1 w-12 bg-gold-500"></div>
            <div className="text-gold-500 font-script text-2xl">❦</div>
            <div className="h-1 w-12 bg-gold-500"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* About Section */}
            <div>
              <h3 className="font-serif font-bold text-gold-400 text-xl mb-4">
                Eternal Union
              </h3>
              <p className="text-cream/80 text-sm leading-relaxed">
                Creating unforgettable Arabian wedding experiences with elegance,
                tradition, and modern sophistication.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-serif font-bold text-gold-400 text-xl mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-cream/80 hover:text-gold-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-serif font-bold text-gold-400 text-xl mb-4">
                Contact
              </h3>
              <div className="space-y-2 text-sm text-cream/80">
                <p>Email: hello@eternalunion.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Location: Bangalore, India</p>
              </div>
            </div>
          </div>

          {/* Bottom divider */}
          <div className="border-t border-maroon-700 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-cream/60 text-sm">
                © 2024 Eternal Union. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="text-cream/60 hover:text-gold-400 transition-colors text-sm"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-cream/60 hover:text-gold-400 transition-colors text-sm"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
