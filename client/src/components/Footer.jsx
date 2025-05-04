import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Truck,
  RefreshCw,
  Phone,
  FileText,
  Info,
  Star,
  DollarSign,
  HelpCircle,
} from "lucide-react";
import ScrollToTopButton from "./ScrollToTop";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr pb-8 from-gray-900 to-gray-800 text-white pt-12">
      <div className="container mx-auto px-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-10">
          {/* Brand & Tagline */}
          <div className="text-start">
            <h2 className="text-2xl font-bold mb-3">BentoBox Co.</h2>
            <p className="text-gray-400">
              Smart, stylish, and sustainable lunch solutions. Eat better, feel
              better.
            </p>
          </div>

          {/* Policy & Support Links */}
          <div className="text-start">
            <h3 className="text-xl font-semibold mb-4">Support</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Truck size={18} />
                <a
                  href="/shipping-policy"
                  className="hover:text-white transition"
                >
                  Shipping Policy
                </a>
              </li>
              <li className="flex items-center gap-2">
                <RefreshCw size={18} />
                <a
                  href="/return-policy"
                  className="hover:text-white transition"
                >
                  Return Policy
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <a href="/contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FileText size={18} />
                <a href="/terms" className="hover:text-white transition">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Site Navigation */}
          <div className="text-start">
            <h3 className="text-xl font-semibold mb-4">Explore</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Info size={18} />
                <a href="#about" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Star size={18} />
                <a href="#features" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li className="flex items-center gap-2">
                <DollarSign size={18} />
                <a href="#pricing" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li className="flex items-center gap-2">
                <HelpCircle size={18} />
                <a href="#faqs" className="hover:text-white transition">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="text-start">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 text-gray-400">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="hover:text-white transition"
              >
                <Facebook size={22} />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="hover:text-white transition"
              >
                <Twitter size={22} />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="hover:text-white transition"
              >
                <Instagram size={22} />
              </a>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="hover:text-white transition"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="mailto:support@bentobox.com"
                aria-label="Email"
                className="hover:text-white transition"
              >
                <Mail size={22} />
              </a>
            </div>

            <div>
              {/* <ScrollToTopButton /> */}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>
            &copy; {new Date().getFullYear()} BentoBox Co. All rights reserved.
          </p>
          <p className="mt-2 md:mt-0">
            <a href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </a>
            &nbsp;|&nbsp;
            <a href="/terms" className="hover:text-white transition">
              Terms & Conditions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
