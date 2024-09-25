import React from "react";
import { motion } from "framer-motion";

interface HeadingProps {
  text: string; // Full text, e.g., "Proof of Work"
  highlightedText: string[]; // Words to highlight, e.g., ["Proof", "Work"]
  className?: string; // Optional additional classes
}

const Heading: React.FC<HeadingProps> = ({
  text,
  highlightedText,
  className,
}) => {

  const words = text.split(" ");

  return (
    <div className='flex flex-col items-center justify-center'>
      <motion.h2
        className={`text-4xl md:text-7xl font-bold pt-20 ${className}`}
        initial={{ opacity: 0, scale: 0.8, rotate: -10, y: 100 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 1.0,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        {/* Loop through each word in the text */}
        {words.map((word, index) => (
          <span
            key={index}
            className={highlightedText.includes(word) ? "text-purple" : ""} // Highlight if word matches
          >
            {word}{" "}
          </span>
        ))}
      </motion.h2>
    </div>
  );
};

export default Heading;
