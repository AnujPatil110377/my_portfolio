import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const ConnectCard = () => {
  return (
    <div className="bento-card h-[200px]">
      <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
      <div className="flex space-x-6">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
           className="p-3 rounded-full hover:bg-gray-800 transition-colors">
          <Github className="w-8 h-8" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
           className="p-3 rounded-full hover:bg-gray-800 transition-colors">
          <Linkedin className="w-8 h-8" />
        </a>
        <a href="mailto:your@email.com"
           className="p-3 rounded-full hover:bg-gray-800 transition-colors">
          <Mail className="w-8 h-8" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
           className="p-3 rounded-full hover:bg-gray-800 transition-colors">
          <Twitter className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
};

export default ConnectCard;