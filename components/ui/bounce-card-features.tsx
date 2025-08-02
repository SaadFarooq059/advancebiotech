import React from "react";
import { motion } from "framer-motion";
import { Microscope, Truck, Shield, Heart } from "lucide-react";

interface BounceCardProps {
  className?: string;
  children: React.ReactNode;
}

interface CardTitleProps {
  children: React.ReactNode;
}

export const BouncyCardsFeatures = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 text-slate-800">
      <div className="mb-8 flex flex-col items-center justify-center gap-4 md:px-8">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 text-center max-w-2xl">
          Comprehensive Healthcare
          <span className="text-purple-600"> Solutions for Pakistan</span>
        </h2>
       
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Pharmaceutical Supply</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-purple-400 to-purple-600 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <div className="flex flex-col items-center justify-center h-full text-white">
              <Microscope className="h-12 w-12 mb-2" />
              <span className="block text-center font-semibold text-purple-50">
                Quality Medicines & Pharmaceuticals
              </span>
            </div>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>Distribution & Logistics</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-green-500 to-green-700 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <div className="flex flex-col items-center justify-center h-full text-white">
              <Truck className="h-12 w-12 mb-2" />
              <span className="block text-center font-semibold text-green-50">
                Nationwide Delivery Network
              </span>
            </div>
          </div>
        </BounceCard>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>Quality Assurance</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-purple-400 to-green-500 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <div className="flex flex-col items-center justify-center h-full text-white">
              <Shield className="h-12 w-12 mb-2" />
              <span className="block text-center font-semibold text-purple-50">
                International Standards Compliance
              </span>
            </div>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Healthcare Solutions</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-green-600 to-purple-800 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <div className="flex flex-col items-center justify-center h-full text-white">
              <Heart className="h-12 w-12 mb-2" />
              <span className="block text-center font-semibold text-green-50">
                Complete Healthcare Support
              </span>
            </div>
          </div>
        </BounceCard>
      </div>
    </section>
  );
};

const BounceCard: React.FC<BounceCardProps> = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-purple-50 p-8 border border-purple-100 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle: React.FC<CardTitleProps> = ({ children }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold text-gray-900">{children}</h3>
  );
};