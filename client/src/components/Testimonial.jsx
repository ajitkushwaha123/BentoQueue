import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ritika Sharma",
    role: "Working Mom, Mumbai",
    quote:
      "This bento box has made packing healthy lunches for my kids effortless. No leaks, easy to clean, and the compartments are super handy!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Harsh Mehta",
    role: "Software Engineer, Pune",
    quote:
      "I take my lunch to the office every day now. It keeps everything fresh, and the build quality is excellent. Worth every rupee!",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Divya Narayan",
    role: "Fitness Enthusiast, Bengaluru",
    quote:
      "Perfect for portion control and meal prep. I love how sleek it looks, and it's completely spill-proof. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function Testimonial() {
  return (
    <section
      id="testimonial"
      className="relative bg-white py-28 px-6 sm:px-10 lg:px-20 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-gray-900 mb-4"
        >
          What Our Customers Say
        </motion.h2>

        <p className="text-md text-gray-600 mb-16 max-w-xl mx-auto">
          Real stories from people who’ve made the switch to our bento lunch
          box.
        </p>

        {/* Testimonials Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <p className="text-gray-800 text-sm italic mb-6 leading-relaxed">
                “{t.quote}”
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                />
                <div className="text-left">
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
