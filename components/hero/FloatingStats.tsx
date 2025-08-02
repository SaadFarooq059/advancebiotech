'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, Clock, Shield } from 'lucide-react';

export default function FloatingStats() {
  const stats = [
    {
      icon: <Users className="h-5 w-5 md:h-6 md:w-6 text-purple-600" />,
      value: "500+",
      label: "Happy Clients",
      position: "md:top-8 md:left-8",
      delay: 0.6,
      bgColor: "from-purple-50 to-white",
      borderColor: "border-purple-100"
    },
    {
      icon: <Award className="h-5 w-5 md:h-6 md:w-6 text-green-600" />,
      value: "6+",
      label: "Years Experience",
      position: "md:top-16 md:right-4",
      delay: 0.8,
      bgColor: "from-green-50 to-white",
      borderColor: "border-green-100"
    },
    {
      icon: <Shield className="h-5 w-5 md:h-6 md:w-6 text-purple-600" />,
      value: "100%",
      label: "Quality Assured",
      position: "md:bottom-20 md:left-4",
      delay: 1.0,
      bgColor: "from-purple-50 to-white",
      borderColor: "border-purple-100"
    },
    {
      icon: <Clock className="h-5 w-5 md:h-6 md:w-6 text-green-600" />,
      value: "24/7",
      label: "Support",
      position: "md:bottom-8 md:right-8",
      delay: 1.2,
      bgColor: "from-green-50 to-white",
      borderColor: "border-green-100"
    }
  ];

  return (
    <>
      {/* Mobile Version - Grid Layout */}
      <div className="block md:hidden mt-8">
        <motion.div 
          className="grid grid-cols-2 gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={`mobile-${index}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.4, 
                delay: 0.6 + (index * 0.1),
                type: "spring",
                stiffness: 120
              }}
            >
              <Card className={`bg-gradient-to-br ${stat.bgColor} backdrop-blur-sm ${stat.borderColor} shadow-md hover:shadow-lg transition-all duration-300`}>
                <CardContent className="p-3 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <div className={`p-1.5 rounded-full ${index % 2 === 0 ? 'bg-purple-100' : 'bg-green-100'}`}>
                      {stat.icon}
                    </div>
                  </div>
                  <div className={`text-lg font-bold ${index % 2 === 0 ? 'text-purple-600' : 'text-green-600'} mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-600 font-medium leading-tight">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Desktop Version - Floating Cards */}
      <div className="hidden md:block">
        {stats.map((stat, index) => (
          <motion.div
            key={`desktop-${index}`}
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
      </div>
    </>
  );
}