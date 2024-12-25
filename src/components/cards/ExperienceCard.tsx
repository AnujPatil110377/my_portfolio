import React from 'react';
import { BookOpen, GraduationCap } from 'lucide-react';
import { motion } from "framer-motion";

const EducationCard = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bento-card bg-[#121212] rounded-lg border-2 border-[#2a2a2a] group transition-all duration-300 hover:bg-[#1e1e1e] hover:scale-105 hover:shadow-lg"
    >
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="text-3xl font-bold text-white mb-3"
      >
        Education
      </motion.h2>
      
      <div className="space-y-8">
        {/* BTech Education */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          whileHover={{ x: 10 }}
          className="flex items-start gap-4"
        >
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="mt-1 p-2 bg-[#1e1e1e] rounded-full group-hover:bg-[#2a2a2a]"
          >
            <GraduationCap className="w-6 h-6 text-blue-400" />
          </motion.div>
          <div>
            <div className="text-gray-400">2022 - Present</div>
            <h3 className="text-xl font-semibold text-blue-400 mt-1 transition-colors duration-300">
              BTech Electrical Engineering
            </h3>
            <div className="text-gray-300 mt-1">IIT Jodhpur</div>
          </div>
        </motion.div>

        {/* High School Education */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          whileHover={{ x: 10 }}
          className="flex items-start gap-4"
        >
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="mt-1 p-2 bg-[#1e1e1e] rounded-full group-hover:bg-[#2a2a2a]"
          >
            <BookOpen className="w-6 h-6 text-blue-400" />
          </motion.div>
          <div>
            <div className="text-gray-400">2020 - 2022</div>
            <h3 className="text-xl font-semibold text-blue-400 mt-1 transition-colors duration-300">
              High School
            </h3>
            <div className="text-gray-300 mt-1">Vedant International School</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default EducationCard;