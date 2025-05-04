import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, ShoppingCart } from "lucide-react";

const StickyCTA = () => {
  return (
    <>
      {/* Mobile: Sticky bottom bar with 50/50 buttons */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden shadow-t-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        <button
          className="w-1/2 flex items-center justify-center gap-2 py-3 bg-white text-gray-700 border-r border-gray-300 hover:bg-gray-100 transition"
          onClick={() => alert("Opening chat...")}
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm font-medium">Chat</span>
        </button>
        <button
          className="w-1/2 flex items-center justify-center gap-2 py-3 bg-indigo-600 text-white hover:bg-indigo-700 transition"
          onClick={() => alert("Redirecting to purchase...")}
        >
          <ShoppingCart className="w-5 h-5" />
          <span className="text-sm font-medium">Buy Now</span>
        </button>
      </motion.div>

      {/* Desktop: Floating CTA buttons */}
      <motion.div
        className="hidden md:flex fixed bottom-4 right-4 z-50 gap-3"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        <button
          className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-full shadow-lg hover:bg-gray-100 transition duration-200"
          onClick={() => alert("Opening chat...")}
        >
          <MessageCircle className="w-5 h-5" />
          <span className="hidden sm:inline">Chat</span>
        </button>
        <button
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition duration-200"
          onClick={() => alert("Redirecting to purchase...")}
        >
          <ShoppingCart className="w-5 h-5" />
          <span className="hidden sm:inline">Buy Now</span>
        </button>
      </motion.div>
    </>
  );
};

export default StickyCTA;
