import { useState } from "react";
import { ChevronDown, Package, Truck } from "lucide-react";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is the bento lunch box microwave safe?",
      answer:
        "Yes, our bento lunch box is microwave safe, but please remove the lid before microwaving.",
      icon: <ChevronDown className="text-xl text-blue-500" />,
    },
    {
      question: "How long will the bento lunch box last?",
      answer:
        "Our bento lunch box is made with durable materials and can last for years with proper care.",
      icon: <ChevronDown className="text-xl text-blue-500" />,
    },
    {
      question: "Can I store liquids in the bento box?",
      answer:
        "Yes, the bento box has compartments that can hold liquids, but we recommend using a sealed container for any soup or liquid-based items.",
      icon: <ChevronDown className="text-xl text-blue-500" />,
    },
    {
      question: "What are the shipping costs?",
      answer:
        "Shipping is free on orders over $50. Otherwise, shipping costs are calculated at checkout.",
      icon: <Truck className="text-xl text-green-500" />,
    },
    {
      question: "How long does shipping take?",
      answer:
        "Standard shipping usually takes 5-7 business days. Expedited shipping is available at checkout for faster delivery.",
      icon: <Truck className="text-xl text-green-500" />,
    },
    {
      question: "Can I track my order?",
      answer:
        "Yes! Once your order is shipped, you will receive a tracking number via email so you can follow your order's journey.",
      icon: <Package className="text-xl text-yellow-500" />,
    },
    {
      question: "Can I change my order after placing it?",
      answer:
        "We process orders quickly, but if you need to change anything, contact us within an hour of placing your order, and we'll do our best to accommodate.",
      icon: <Package className="text-xl text-yellow-500" />,
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="max-w-6xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md transition-all duration-300 ease-in-out"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center text-lg font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
              >
                <div className="flex items-center space-x-4">
                  {faq.icon}
                  <span>{faq.question}</span>
                </div>
                <ChevronDown
                  className={`w-6 h-6 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="pb-4 text-start text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
