import React from "react";
import { motion } from "framer-motion";
import { problem, solutions } from "../assets";
import { CheckCircle, XCircle } from "lucide-react";

const BentoLunchBoxSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-12 text-center"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Problems With Traditional Lunch Boxes
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-sm text-gray-600 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Tired of messy meals and unhealthy eating habits? Our{" "}
          <span className="font-semibold text-gray-800">Bento Lunch Box</span>{" "}
          is here to upgrade your experience—organized, healthy, and
          effortlessly enjoyable.
        </motion.p>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-8 items-stretch justify-center">
          {/* Problem Card */}
          <motion.div
            className="relative bg-gradient-to-br from-red-50 to-white rounded-3xl p-6 shadow-xl w-full md:w-1/2 transition-shadow duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.div
              className="absolute top-4 right-4 bg-red-100 p-2 rounded-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <XCircle size={20} className="text-red-500" />
            </motion.div>
            <img
              src={problem}
              alt="Problem"
              className="rounded-xl w-full h-auto object-cover mb-6"
            />
            <h3 className="text-lg font-semibold text-gray-700">
              Common Issues
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Spills, lack of compartments, and poor insulation.
            </p>
          </motion.div>

          {/* Solution Card */}
          <motion.div
            className="relative bg-gradient-to-br from-green-50 to-white rounded-3xl p-6 shadow-xl w-full md:w-1/2 transition-shadow duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.div
              className="absolute top-4 right-4 bg-green-100 p-2 rounded-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.4 }}
            >
              <CheckCircle size={20} className="text-green-600" />
            </motion.div>
            <img
              src={solutions}
              alt="Solution"
              className="rounded-xl w-full h-auto object-cover mb-6"
            />
            <h3 className="text-lg font-semibold text-gray-700">
              Smart Solution
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Leak-proof, compact, and perfectly organized for healthy meals.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BentoLunchBoxSection;
