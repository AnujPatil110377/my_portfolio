import { motion } from "framer-motion";

const AvatarGreeting = () => {
  return (
    <motion.div 
      className="relative w-40 h-40"
      initial={{ scale: 1 }}
      animate={{ scale: 1.1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Rounded Corner Image */}
      <motion.img
        src="/download.jpg" // Replace with your image path
        alt="Anuj Patil"
        className="w-40 h-40 rounded-xl object-cover"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      {/* Greeting Tooltip */}
      <motion.div
        className="absolute -right-4 -top-4 bg-gray-900 text-white p-2 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-sm font-medium">Hello!</p>
      </motion.div>
    </motion.div>
  );
};

export default AvatarGreeting;
