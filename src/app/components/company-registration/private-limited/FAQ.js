import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const faqs = [
  {
    question:
      "Do we need your Physical presence during Online Company Registration Process?",
    answer:
      "Since, the incorporation of a Private Limited Company is a 100% online process, thus all the forms and documents are submitted on the MCA portal digitally. Hence, no physical presence is required.",
  },
  {
    question: "What is Digital Signature Certificate (DSC)",
    answer:
      "In layman language, a DSC is an electronic device which carries your signature. For filing all the e-forms at MCA, a DSC is a must.",
  },
  {
    question: "What is the annual cost to run a private limited company?",
    answer:
      "There is no annual cost to run a private limited company. You just need to do the annual compliances to avoid blacklisting or penalty on your company.",
  },
  {
    question:
      "What are articles of association (AOA) and memorandum of association (MOA)?",
    answer:
      "The objectives, rules and regulations of your Private Limited Company is drafted in MOA and AOA. It gives an holistic overview about the working nature of your company.",
  },
  {
    question: "How many Directors & hareholders can be a part of same company?",
    answer:
      "Minimum 2 directors are required for a Pvt. Ltd. Company Registration. The number of shareholders or members must not exceed 200.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full poppins bg-white">
      <div className="w-full max-w-[910px] text-black pl-6 py-8 text-center">
        <h2 className="text-3xl font-bold pt-4">FAQs</h2>
        <h4 className="font-semibold">
          Few doubts important to be resolved quickly
        </h4>

        <div className="flex flex-col my-4 user-select-none">
          {faqs.length > 0 &&
            faqs.map((data, index) => (
              <div
                className={`flex flex-col border border-[#d5d8dc]  ${
                  index !== 0 ? "border-t-0" : "border-t"
                }`}
                key={index}
              >
                <div
                  onClick={() => toggleFAQ(index)}
                  className={`flex items-center justify-between bg-[#F7E9E9] ${
                    openIndex === index ? "text-primary" : "text-black"
                  } p-2 cursor-pointer `}
                >
                  <h3 className="text-[15px] font-medium">{data.question}</h3>
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </div>
                <div
                  className={`transition-all duration-300 ease-in-out  ${
                    openIndex === index
                      ? "max-h-[200px] p-2 pb-5"
                      : "max-h-0 py-0 px-2"
                  } overflow-hidden border-t border-[#d5d8dc]`}
                >
                  <p className="text-sm text-justify">{data.answer}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
