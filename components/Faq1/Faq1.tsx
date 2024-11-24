import React from 'react'
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

interface FAQProps {
  question: string;
  answer: string;
}
const Faq1 = ({question,answer}:FAQProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen)
   }

    return (
      <div className="border-b border-gray-300">
        <button
          onClick={toggleFAQ}
          className="w-full flex justify-between items-center py-4 px-4 focus:outline-none"
        >
          <span className="text-left font-medium text-lg">{question}</span>
          <span className=' bg-[#F9C63D33] rounded-full flex justify-center items-center p-1 hover:shadow-md shadow-black  hover:scale-105 '>
          <IoIosArrowDown className={`text-[#F9C63D] transition-all duration-700  ${isOpen ? " rotate-180":""} `} />
        </span>
        </button>
        <div
          className={`overflow-hidden transition-all duration-1000 ${isOpen ? 'max-h-[1000px] ' : 'max-h-0'
            }`}
        >
          <p className="px-4 py-2 text-gray-600">{answer}</p>
        </div>
      </div>
    )
  }

  export default Faq1
