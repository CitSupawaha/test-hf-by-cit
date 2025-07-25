import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { question: "What is the registration fee?", answer: "It’s completely free!" },
  { question: "Can I withdraw my prize anytime?", answer: "Yes, after identity verification." },
  { question: "Is this contest available worldwide?", answer: "Yes, it’s global." },
  { question: "How do I track my leaderboard ranking?", answer: "Check the leaderboard tab." },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>();

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-center text-2xl font-bold mb-8">FAQs</h2>
      <div className="divide-y divide-gray-300">
        {faqs.map((faq, i) => (
          <div key={i}>
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex justify-between items-center py-4 text-left font-medium text-lg text-gray-800 hover:text-red-500 transition-colors"
            >
              {faq.question}
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  openIndex === i ? "rotate-180 text-red-500" : "rotate-0"
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="pb-4 text-sm text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
