import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { logo } from "../assets";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Benefits", href: "#benefit" },
    { name: "FAQ", href: "#faq" },
    { name: "Testimonial", href: "#testimonial" },
  ];

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 z-50 font-poppins transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent backdrop-blur"
      }`}
    >
      <div className="max-w-full px-6 sm:px-12 mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h2 className="text-2xl flex justify-center items-center font-bold text-indigo-600">
              BentoQueue <span className="hidden md:block"></span>
            </h2>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-9">
            {navLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                whileHover={{ scale: 1.08, color: "#4f46e5" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-gray-800 hover:text-indigo-600 text-sm font-medium transition"
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <motion.div
            className="hidden md:block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="#product"
              className="bg-indigo-600 text-white text-sm font-medium px-5 py-2 rounded-full shadow hover:bg-indigo-700 transition"
            >
              Get Started
            </a>
          </motion.div>

          {/* Mobile: CTA + Menu Icon */}
          <div className="md:hidden flex items-center space-x-3">
            <motion.a
              href="#video"
              className="bg-indigo-600 text-white text-sm font-medium px-4 py-1.5 rounded-full shadow hover:bg-indigo-700 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 z-50"
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-in Sidebar Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-30"
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.4 }}
              className="fixed top-0 left-0 h-screen w-[80%] bg-white z-40 p-6 overflow-y-auto shadow-xl rounded-r-2xl"
            >
              <div className="flex items-center justify-between mb-8">
                <p className="font-bold text-md text-indigo-600">Bento Queue</p>
                <button onClick={() => setMenuOpen(false)}>
                  <X size={24} />
                </button>
              </div>
              <div className="space-y-6">
                {navLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    className="block text-gray-800 font-medium text-sm"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
