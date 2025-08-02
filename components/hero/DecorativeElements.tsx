'use client';

import { motion } from 'framer-motion';

export default function DecorativeElements() {
  return (
    <>
      <motion.div 
        className="absolute -top-4 right-1/4 w-8 h-8 bg-orange-200 rounded-full opacity-60"
        animate={{ 
          y: [0, -10, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ 
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut"
        }}
      ></motion.div>
      
      <motion.div 
        className="absolute bottom-1/4 -left-4 w-6 h-6 bg-orange-300 rounded-full opacity-50"
        animate={{ 
          y: [0, 15, 0],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ 
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1
        }}
      ></motion.div>
    </>
  );
}