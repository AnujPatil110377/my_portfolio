import { motion } from "framer-motion";

const AvatarGreeting = () => {
  return (
    <motion.div 
      className="relative w-32 h-32"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
        <span className="text-4xl">👋</span>
      </div>
      <motion.div
        className="absolute -right-2 -top-2 bg-card p-2 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-sm font-medium">Hello!</p>
      </motion.div>
    </motion.div>
  );
};

export default AvatarGreeting;