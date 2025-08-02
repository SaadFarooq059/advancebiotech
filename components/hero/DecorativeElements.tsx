'use client';

import { motion } from 'framer-motion';

export default function DecorativeElements() {
  return (
    <>
      {/* Floating Circles with Purple/Green Theme */}
      <motion.div
        className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full opacity-60"
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ 
          duration: 2, 
          delay: 0.5,
          rotate: { duration: 20, repeat: Infinity, ease: "linear" }
        }}
      />
      
      <motion.div
        className="absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-br from-green-200 to-green-300 rounded-full opacity-50"
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: -360 }}
        transition={{ 
          duration: 2.5, 
          delay: 0.7,
          rotate: { duration: 25, repeat: Infinity, ease: "linear" }
        }}
      />
      
      <motion.div
        className="absolute top-1/3 -right-6 w-16 h-16 bg-gradient-to-br from-purple-300 to-green-300 rounded-full opacity-40"
        initial={{ scale: 0, y: 0 }}
        animate={{ 
          scale: 1, 
          y: [-10, 10, -10]
        }}
        transition={{ 
          scale: { duration: 1.5, delay: 1 },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      
      {/* Geometric Shapes */}
      <motion.div
        className="absolute top-12 right-1/4 w-8 h-8 border-2 border-purple-400 transform rotate-45 opacity-60"
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 0.6, rotate: 45 }}
        transition={{ duration: 1.5, delay: 1.2 }}
        style={{
          background: 'linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(34, 197, 94, 0.1))'
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 -left-4 w-6 h-6 bg-gradient-to-br from-green-400 to-purple-400 rounded-full opacity-50"
        initial={{ scale: 0 }}
        animate={{ 
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          delay: 1.5
        }}
      />
      
      {/* Dots Pattern */}
      <div className="absolute top-1/4 left-1/4 opacity-30">
        <motion.div
          className="grid grid-cols-3 gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2, delay: 1.8 }}
        >
          {[...Array(9)].map((_, i) => (
            <motion.div
              key={i}
              className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-purple-400' : 'bg-green-400'}`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                duration: 0.3, 
                delay: 2 + (i * 0.1),
                type: "spring",
                stiffness: 200
              }}
            />
          ))}
        </motion.div>
      </div>
      
      {/* Gradient Lines */}
      <motion.div
        className="absolute top-3/4 right-12 w-20 h-1 bg-gradient-to-r from-purple-400 to-green-400 rounded-full opacity-60"
        initial={{ width: 0 }}
        animate={{ width: 80 }}
        transition={{ duration: 1.5, delay: 2.2 }}
      />
      
      <motion.div
        className="absolute bottom-12 left-16 w-16 h-1 bg-gradient-to-r from-green-400 to-purple-400 rounded-full opacity-50"
        initial={{ width: 0 }}
        animate={{ width: 64 }}
        transition={{ duration: 1.2, delay: 2.5 }}
      />
      
      {/* Pulsing Ring */}
      <motion.div
        className="absolute top-2/3 left-8 w-12 h-12 border-2 border-purple-300 rounded-full opacity-40"
        initial={{ scale: 0 }}
        animate={{ 
          scale: [1, 1.3, 1],
        }}
        transition={{ 
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.8
        }}
      />
    </>
  );
}