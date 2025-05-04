import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

const features = [
  { label: "Leak-proof Design", you: true, others: false },
  { label: "Microwave Safe", you: true, others: false },
  { label: "Eco-Friendly Materials", you: true, others: false },
  { label: "Custom Compartments", you: true, others: true },
  { label: "Durable & Long-lasting", you: true, others: false },
  { label: "Affordable Price", you: true, others: false },
];

const extraDetails = {
  material: {
    label: "Material",
    you: "BPA-Free Wheat Fiber",
    others: "Generic Plastic",
  },
  size: {
    label: "Size",
    you: "1200ml (Multi-Compartment)",
    others: "800ml (Basic)",
  },
  warranty: {
    label: "Warranty",
    you: "12 Months",
    others: "None",
  },
};

export default function ComparisonSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Our Bento Box?
          </h2>
          <p className="text-gray-600 text-lg">
            Compare key features and specs with other brands.
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-gray-100 text-gray-800 text-left">
              <tr>
                <th className="px-6 py-4">Features</th>
                <th className="px-6 py-4 text-center">Our Bento Box</th>
                <th className="px-6 py-4 text-center">Others</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={index}
                  className={`border-t text-start border-gray-200 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="px-6 py-4 font-medium text-gray-700">
                    {feature.label}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {feature.you ? (
                      <CheckCircle className="text-green-500 w-5 h-5 mx-auto" />
                    ) : (
                      <XCircle className="text-red-400 w-5 h-5 mx-auto" />
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {feature.others ? (
                      <CheckCircle className="text-green-500 w-5 h-5 mx-auto" />
                    ) : (
                      <XCircle className="text-red-400 w-5 h-5 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}

              {Object.values(extraDetails).map((item, index) => (
                <tr
                  key={`extra-${index}`}
                  className={`border-t text-start border-gray-300 bg-gray-100`}
                >
                  <td className="px-6 py-4 font-semibold text-gray-800">
                    {item.label}
                  </td>
                  <td className="px-6 py-4 text-center text-gray-700 font-medium">
                    {item.you}
                  </td>
                  <td className="px-6 py-4 text-center text-gray-600">
                    {item.others}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
