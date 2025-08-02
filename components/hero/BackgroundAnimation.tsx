'use client';

import { motion } from 'framer-motion';

export default function BackgroundAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-green-50" />
      
      {/* Animated blob shapes */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-200 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-br from-green-200 to-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-25"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
      />
      
      <motion.div
        className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-br from-purple-300 to-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        animate={{
          x: [0, -60, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10
        }}
      />
      
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-2 h-2 rounded-full ${
            i % 2 === 0 ? 'bg-purple-300' : 'bg-green-300'
          } opacity-40`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(147 51 234) 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>
    </div>
  );
}