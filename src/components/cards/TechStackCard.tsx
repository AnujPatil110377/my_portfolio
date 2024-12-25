import CppIcon from './cpp.svg';
import PythonIcon from './python.svg';
import JavaScriptIcon from './javascript.svg';
import TypeScriptIcon from './typescript.svg';
import ROSIcon from './nextjs.svg';
import PyTorchIcon from './pytorch.svg';
import ReactIcon from './react.svg';
import NodeJsIcon from './node-js.svg';
import LinuxIcon from './linux.svg';
import DockerIcon from './docker.svg';
import MySQLIcon from './mysql.svg';
import KubernetesIcon from './kubernetes.svg';

const TechStackCard = () => {
  const techStacks = {
    languages: [
      { icon: <img src={CppIcon} alt="C++" className="w-8 h-8 animate-bounce" />, name: "C++" },
      { icon: <img src={PythonIcon} alt="Python" className="w-8 h-8 animate-bounce" />, name: "Python" },
      { icon: <img src={JavaScriptIcon} alt="JavaScript" className="w-8 h-8 animate-bounce" />, name: "JavaScript" },
      { icon: <img src={TypeScriptIcon} alt="TypeScript" className="w-8 h-8 animate-bounce" />, name: "TypeScript" },
    ],
    frameworks: [
      { icon: <img src={ROSIcon} alt="NEXT.Js" className="w-8 h-8 animate-bounce" />, name: "NEXT.Js" },
      { icon: <img src={PyTorchIcon} alt="PyTorch" className="w-8 h-8 animate-bounce" />, name: "PyTorch" },
      { icon: <img src={ReactIcon} alt="React" className="w-8 h-8 animate-bounce" />, name: "React" },
      { icon: <img src={NodeJsIcon} alt="Node.js" className="w-8 h-8 animate-bounce" />, name: "Node.js" },
    ],
    tools: [
      { icon: <img src={LinuxIcon} alt="Linux" className="w-8 h-8 animate-bounce" />, name: "Linux" },
      { icon: <img src={DockerIcon} alt="Docker" className="w-8 h-8 animate-bounce" />, name: "Docker" },
      { icon: <img src={MySQLIcon} alt="MySQL" className="w-8 h-8 animate-bounce" />, name: "MySQL" },
      { icon: <img src={KubernetesIcon} alt="Kubernetes" className="w-8 h-8 animate-bounce" />, name: "Kubernetes" },
    ],
  };

  return (
    <div className="bento-card col-span-3 bg-black hover:shadow-lg transition-all duration-300 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-200">Tech Stack</h2>
      <div className="flex flex-row justify-between gap-8">
        {Object.entries(techStacks).map(([category, items]) => (
          <div
            key={category}
            className={`flex-1 ${category === 'languages' ? 'bg-[#1E293B]' : category === 'frameworks' ? 'bg-[#003B46]' : 'bg-[#26547C]'} p-6 rounded-xl hover:scale-105 hover:shadow-md transition-all duration-300`}
          >
            <h3 className={`text-xl font-semibold capitalize ${category === 'languages' ? 'text-white' : category === 'frameworks' ? 'text-gray-300' : 'text-[#FDE047]'} mb-6 text-center`}>
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

