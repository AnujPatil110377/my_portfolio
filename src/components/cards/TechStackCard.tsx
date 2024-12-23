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
    <div className="bento-card col-span-3 bg-[#0A192F] hover:bg-[#112240] transition-all duration-300">
      <h2 className="text-2xl font-bold mb-6 text-[#4FD1C5]">Tech Stack</h2>
      <div className="flex flex-row justify-between gap-8">
        {Object.entries(techStacks).map(([category, items]) => (
          <div key={category} className="flex-1 bg-[#112240] p-6 rounded-xl">
            <h3 className="text-xl font-semibold capitalize text-[#FF66C4] mb-6 text-center">{category}</h3>
            <div className="grid grid-cols-2 gap-6">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2 p-3 transition-all duration-300 hover:scale-110 hover:bg-[#1A2F4C] rounded-lg group"
                >
                  <div className="text-[#8892B0] group-hover:text-[#4FD1C5] transition-colors duration-300 animate-bounce-slow">
                    {item.icon}
                  </div>
                  <span className="text-sm text-center text-[#8892B0] group-hover:text-white transition-colors duration-300">
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