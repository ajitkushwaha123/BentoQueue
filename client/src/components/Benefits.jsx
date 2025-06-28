"use client";

import { motion } from "framer-motion";
import {
  HeartPulse,
  UtensilsCrossed,
  Box,
  Clock3,
  Droplets,
  Leaf,
} from "lucide-react";

const benefits = [
  {
    icon: HeartPulse,
    title: "Healthier Meals",
    description:
      "Encourages mindful eating by making homemade meals more appealing.",
  },
  {
    icon: UtensilsCrossed,
    title: "Portion Control",
    description:
      "Perfectly sized compartments help manage portions effortlessly.",
  },
  {
    icon: Box,
    title: "Compact & Portable",
    description:
      "Designed to fit in your bag and keep meals secure during travel.",
  },
  {
    icon: Clock3,
    title: "Time-Saving",
    description: "Prep your meals in advance and eat on-the-go without fuss.",
  },
  {
    icon: Droplets,
    title: "Leak-Proof Design",
    description: "No mess, no worries — keeps food fresh and separate.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description:
      "Reusable and sustainable — say goodbye to single-use plastics.",
  },
];

export default function Benefits() {
  return (
    <section className="py-24 bg-white">
      <div id="benefit" className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-900 mb-4"
        >
          Why Choose Our Bento Box?
        </motion.h2>
        <p className="text-gray-600 mb-14 max-w-2xl mx-auto text-lg">
          Experience the perfect balance of convenience, health, and design —
          all in one box.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-start text-left p-6 bg-gray-50 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 bg-indigo-100 text-indigo-600 rounded-xl p-3">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
