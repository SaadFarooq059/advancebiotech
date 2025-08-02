'use client';

import { motion } from 'framer-motion';

export default function FloatingStats() {
  return (
    <>
      <motion.div 
        className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-orange-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        whileHover={{ y: -5 }}
      >
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-600">6+</div>
          <div className="text-xs text-gray-600">Years Experience</div>
        </div>
      </motion.div>
      
      <motion.div 
        className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-orange-100"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        whileHover={{ y: -5 }}
      >
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-600">500+</div>
          <div className="text-xs text-gray-600">Happy Clients</div>
        </div>
      </motion.div>
      
      <motion.div 
        className="absolute top-1/2 -right-8 bg-white rounded-2xl p-4 shadow-xl border border-orange-100"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        whileHover={{ x: 5 }}
      >
        <div className="text-center">
          <div className="text-2xl font-bold text-orange-600">24/7</div>
          <div className="text-xs text-gray-600">Support</div>
        </div>
      </motion.div>
    </>
  );
}