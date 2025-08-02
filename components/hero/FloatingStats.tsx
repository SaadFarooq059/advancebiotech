'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, Clock, Shield } from 'lucide-react';

export default function FloatingStats() {
  const stats = [
    {
      icon: <Users className="h-6 w-6 text-purple-600" />,
      value: "500+",
      label: "Happy Clients",
      position: "top-8 left-8",
      delay: 0.6,
      bgColor: "from-purple-50 to-white",
      borderColor: "border-purple-100"
    },
    {
      icon: <Award className="h-6 w-6 text-green-600" />,
      value: "6+",
      label: "Years Experience",
      position: "top-16 right-4",
      delay: 0.8,
      bgColor: "from-green-50 to-white",
      borderColor: "border-green-100"
    },
    {
      icon: <Shield className="h-6 w-6 text-purple-600" />,
      value: "100%",
      label: "Quality Assured",
      position: "bottom-20 left-4",
      delay: 1.0,
      bgColor: "from-purple-50 to-white",
      borderColor: "border-purple-100"
    },
    {
      icon: <Clock className="h-6 w-6 text-green-600" />,
      value: "24/7",
      label: "Support",
      position: "bottom-8 right-8",
      delay: 1.2,
      bgColor: "from-green-50 to-white",
      borderColor: "border-green-100"
    }
  ];

  return (
    <>
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className={`absolute ${stat.position} z-20`}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: stat.delay,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
        >
          <Card className={`bg-gradient-to-br ${stat.bgColor} backdrop-blur-sm ${stat.borderColor} shadow-lg hover:shadow-xl transition-all duration-300`}>
            <CardContent className="p-4 text-center min-w-[120px]">
              <div className="flex items-center justify-center mb-2">
                <div className={`p-2 rounded-full ${index % 2 === 0 ? 'bg-purple-100' : 'bg-green-100'}`}>
                  {stat.icon}
                </div>
              </div>
              <div className={`text-2xl font-bold ${index % 2 === 0 ? 'text-purple-600' : 'text-green-600'} mb-1`}>
                {stat.value}
              </div>
              <div className="text-xs text-gray-600 font-medium">
                {stat.label}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </>
  );
}