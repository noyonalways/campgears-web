import { motion } from "framer-motion";
import React from "react";

const ProductCardSkeleton: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="font-montserrat p-5 py-5 text-left cursor-pointer rounded border border-slate-200 group overflow-hidden animate-pulse"
    >
      <div className="w-full h-52 mx-auto bg-gray-300 rounded"></div>
      <div className="h-4 bg-gray-300 rounded mt-6 mb-2 w-1/4"></div>
      <div className="h-6 bg-gray-300 rounded mb-3 lg:mb-5 w-3/4"></div>
      <div className="h-4 bg-gray-300 rounded mb-5 w-1/2"></div>
      <div className="h-4 bg-gray-300 rounded mb-5 w-full"></div>
      <div className="h-6 bg-gray-300 rounded mb-5 w-1/4"></div>
      <div className="h-8 bg-primary/40 rounded w-1/2"></div>
    </motion.div>
  );
};

export default ProductCardSkeleton;
