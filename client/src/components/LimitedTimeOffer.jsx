"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { useState, useEffect } from "react";

const calculateTimeLeft = (endDate) => {
  const deadline = new Date(endDate); 
  const timeLeft = deadline - new Date();

  return {
    hours: Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((timeLeft % (1000 * 60)) / 1000),
  };
};

const LimitedTimeOffer = ({ endDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(endDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(endDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center p-8 bg-white border border-gray-200 rounded-2xl shadow-xl"
        >
          <div className="flex justify-center mb-4">
            <div className="bg-red-100 text-red-600 p-3 rounded-full">
              <Clock className="w-6 h-6" />
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Limited-Time Offer!
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Get 20% off for the next 24 hours — hurry, time is ticking!
          </p>

          <div className="flex justify-center items-center space-x-6">
            <div className="bg-gray-100 text-lg font-medium text-gray-800 rounded-lg px-6 py-3">
              <span className="font-bold text-xl">
                {String(timeLeft.hours).padStart(2, "0")}h:
                {String(timeLeft.minutes).padStart(2, "0")}m:
                {String(timeLeft.seconds).padStart(2, "0")}s
              </span>
              <p className="text-sm text-gray-500 mt-1">Remaining</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LimitedTimeOffer;
