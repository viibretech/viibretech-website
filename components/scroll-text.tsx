"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollingTextAnimation = () => {
  const items = [
    { text: "Digital Transformation,", highlight: true },
    { text: "Workflow & AI Automation,", highlight: false },
    { text: "UX/UI & Digital Product Design,", highlight: false },
    { text: "Data Systems & Analytics,", highlight: false },
    { text: "Systems Integration & Cloud Engineering,", highlight: false },
    { text: "Cybersecurity & Compliance", highlight: false },
  ];

  const [visibleItems, setVisibleItems] = useState([0, 1, 2, 3, 4, 5]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleItems((prev) => {
        const newItems = [...prev];
        newItems.shift();
        newItems.push((newItems[newItems.length - 1] + 1) % items.length);
        return newItems;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      <div className="w-full max-w-5xl h-[600px] flex flex-col justify-center overflow-hidden">
        <AnimatePresence mode="popLayout">
          {visibleItems.map((itemIndex, position) => {
            const item = items[itemIndex];
            const isTop = position === 0;

            return (
              <motion.div
                key={`${itemIndex}-${position}`}
                initial={{
                  opacity: 0,
                  y: 100,
                  scale: 0.8,
                }}
                animate={{
                  opacity: isTop ? 1 : 0.3,
                  y: 0,
                  scale: isTop ? 1 : 0.85,
                }}
                exit={{
                  opacity: 0,
                  y: -100,
                  scale: 0.8,
                  transition: { duration: 0.5 },
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.43, 0.13, 0.23, 0.96],
                }}
                className={`text-center mb-4 ${
                  isTop ? "text-3xl md:text-5xl" : "text-3xl md:text-5xl"
                }`}
              >
                <span
                  className={`font-bold ${
                    isTop ? "text-white" : "text-slate-300"
                  }`}
                >
                  {item.text}
                </span>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ScrollingTextAnimation;
