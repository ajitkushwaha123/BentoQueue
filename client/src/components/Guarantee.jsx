"use client";

import { motion } from "framer-motion";
import { ShieldCheck, RefreshCcw, Smile } from "lucide-react";

const guarantees = [
  {
    icon: ShieldCheck,
    title: "30-Day Money-Back",
    description: "Full refund within 30 days if not satisfied.",
    bg: "bg-green-100",
    text: "text-green-600",
  },
  {
    icon: RefreshCcw,
    title: "Return Within 7 Days",
    description: "Return within 14 days, free of charge.",
    bg: "bg-blue-100",
    text: "text-blue-600",
  },
  {
    icon: Smile,
    title: "Satisfaction Guaranteed",
    description: "We’ll make it right, every time.",
    bg: "bg-yellow-100",
    text: "text-yellow-600",
  },
];

export default function GuaranteeSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Promises to You
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {guarantees.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="flex items-center justify-center p-6 bg-gray-50 border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${item.bg} ${item.text} mr-5`}
              >
                <item.icon className="w-6 h-6" />
              </div>
              <div className="text-start">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
