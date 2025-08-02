'use client';

import { motion } from 'framer-motion';

export default function BackgroundAnimation() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-orange-600/20"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {Array.from({ length: 36 }, (_, i) => (
          <motion.path
            key={i}
            d={`M-${380 - i * 5} -${189 + i * 6}C-${
              380 - i * 5
            } -${189 + i * 6} -${312 - i * 5} ${216 - i * 6} ${
              152 - i * 5
            } ${343 - i * 6}C${616 - i * 5} ${470 - i * 6} ${
              684 - i * 5
            } ${875 - i * 6} ${684 - i * 5} ${875 - i * 6}`}
            stroke="currentColor"
            strokeWidth={0.5 + i * 0.03}
            strokeOpacity={0.1 + i * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}