import {
  Code2,
  Binary,
  Cpu,
  Bot,
  Brain,
  Server,
  Terminal,
  Container,
  Database,
  Globe,
  Laptop,
  Monitor
} from "lucide-react";

const TechStackCard = () => {
  const techStacks = {
    languages: [
      { icon: <Code2 className="w-8 h-8" />, name: "C++" },
      { icon: <Binary className="w-8 h-8" />, name: "Python" },
      { icon: <Code2 className="w-8 h-8" />, name: "JavaScript" },
      { icon: <Code2 className="w-8 h-8" />, name: "TypeScript" },
    ],
    frameworks: [
      { icon: <Bot className="w-8 h-8" />, name: "ROS" },
      { icon: <Brain className="w-8 h-8" />, name: "PyTorch" },
      { icon: <Monitor className="w-8 h-8" />, name: "React" },
      { icon: <Server className="w-8 h-8" />, name: "Node.js" },
    ],
    tools: [
      { icon: <Terminal className="w-8 h-8" />, name: "Linux" },
      { icon: <Container className="w-8 h-8" />, name: "Docker" },
      { icon: <Database className="w-8 h-8" />, name: "MySQL" },
      { icon: <Globe className="w-8 h-8" />, name: "Kubernetes" },
    ],
  };

  return (
    <div className="bento-card col-span-3 bg-black hover:shadow-lg transition-all duration-300 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-200">Tech Stack</h2>
      <div className="flex flex-row justify-between gap-8">
        {Object.entries(techStacks).map(([category, items]) => (
          <div
            key={category}
            className="flex-1 bg-gray-800 p-6 rounded-xl hover:scale-105 hover:shadow-md transition-all duration-300"
          >
            <h3 className="text-xl font-semibold capitalize text-gray-400 mb-6 text-center">
              {category}
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2 p-3 transition-all duration-300 hover:bg-gray-700 rounded-lg group"
                >
                  <div className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <span className="text-sm text-center text-gray-400 group-hover:text-white transition-colors duration-300">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackCard;