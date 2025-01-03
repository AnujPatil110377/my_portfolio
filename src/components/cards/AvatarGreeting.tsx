import { motion } from "framer-motion";

const AvatarGreeting = () => {
  return (
    <motion.div
      className="relative w-32 h-32"
      initial={{ scale: 1 }}
      animate={{ scale: 1.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-32 h-32 rounded-full overflow-hidden flex items-center justify-center">
        {/* Replace the src with your SVG image path */}
        <img 
          src="https://avatars.githubusercontent.com/u/50112902?v=4" 
          alt="Avatar"
          className="w-full h-full object-cover"
        />
      </div>
      <motion.div
        className="absolute -right-2 -top-2 bg-card p-2 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-sm font-medium">Greetings!</p>
      </motion.div>
    </motion.div>
  );
};

export default AvatarGreeting;
