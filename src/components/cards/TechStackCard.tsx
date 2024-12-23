import {
  Cpu,
  Bot,
  Brain,
  Code2,
  Server,
  Terminal,
  Container,
  Database,
  Globe,
} from "lucide-react";

const TechStackCard = () => {
  const techStacks = {
    languages: [
      { icon: <Cpu className="w-8 h-8" />, name: "C++" },
      { icon: <Code2 className="w-8 h-8" />, name: "Python" },
      { icon: <Globe className="w-8 h-8" />, name: "JavaScript" },
      { icon: <Terminal className="w-8 h-8" />, name: "TypeScript" },
    ],
    frameworks: [
      { icon: <Bot className="w-8 h-8" />, name: "ROS" },
      { icon: <Brain className="w-8 h-8" />, name: "PyTorch" },
      { icon: <Code2 className="w-8 h-8" />, name: "React" },
      { icon: <Server className="w-8 h-8" />, name: "Node.js" },
    ],
    tools: [
      { icon: <Terminal className="w-8 h-8" />, name: "Linux" },
      { icon: <Container className="w-8 h-8" />, name: "Docker" },
      { icon: <Database className="w-8 h-8" />, name: "MySQL" },
      { icon: <Server className="w-8 h-8" />, name: "Kubernetes" },
    ],
  };

  return (
    <div className="bento-card col-span-3">
      <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>
      <div className="flex flex-row justify-between gap-4">
        {Object.entries(techStacks).map(([category, items]) => (
          <div key={category} className="flex-1">
            <h3 className="text-xl font-semibold capitalize text-blue-400 mb-4">{category}</h3>
            <div className="grid grid-cols-2 gap-4">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2 p-2 transition-transform hover:scale-110"
                >
                  <div className="text-gray-300 hover:text-blue-400 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-sm text-center">{item.name}</span>
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