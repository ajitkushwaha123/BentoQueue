import { motion } from "framer-motion";
import bentoImg1 from "../assets/feature1.jpg";
import bentoImg2 from "../assets/feature2.jpg";

const features = [
  "BPA Free",
  "Dishwasher Safe",
  "Leakproof",
  "Freezer Safe",
  "Large Capacity",
  "Stainless Steel",
  "Stores Liquids",
  "Not Easy to Break",
];

const Features = () => {
  return (
    <section id="features" className="py-16 bg-gray-50 font-poppins">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-12 text-center"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Why Choose Bento Lunch Box?
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Image + Label Stack */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={bentoImg1}
              alt="Bento features"
              className="rounded-2xl shadow-2xl w-full transform transition-transform hover:scale-105"
            />
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10">
              {features.slice(0, 4).map((item, idx) => (
                <li
                  key={idx}
                  className="bg-blue-100 text-blue-800 text-sm font-medium py-2 px-4 rounded-lg text-center shadow-md transform transition-transform hover:scale-105"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Secondary Image + Annotations */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={bentoImg2}
              alt="Bento annotations"
              className="rounded-2xl shadow-2xl w-full transform transition-transform hover:scale-105"
            />
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10">
              {features.slice(4).map((item, idx) => (
                <li
                  key={idx}
                  className="bg-pink-100 text-pink-800 text-sm font-medium py-2 px-4 rounded-lg text-center shadow-md transform transition-transform hover:scale-105"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
