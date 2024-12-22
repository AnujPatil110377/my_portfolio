import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import {
  Cpu,
  Bot,
  Brain,
  Code2 as ReactIcon,
  Server,
  Terminal as Linux,
  Dock as Docker,
  Container
} from "lucide-react";

const Index = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const AnalogClock = () => {
    const hours = time.getHours() % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    
    const hourDegrees = (hours + minutes / 60) * 30;
    const minuteDegrees = (minutes + seconds / 60) * 6;
    const secondDegrees = seconds * 6;

    return (
      <div className="relative w-32 h-32 rounded-full border-4 border-gray-600 mx-auto">
        <div
          className="absolute w-1 h-12 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-bottom"
          style={{ transform: `rotate(${hourDegrees}deg)` }}
        />
        <div
          className="absolute w-0.5 h-14 bg-blue-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-bottom"
          style={{ transform: `rotate(${minuteDegrees}deg)` }}
        />
        <div
          className="absolute w-0.5 h-16 bg-red-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-bottom"
          style={{ transform: `rotate(${secondDegrees}deg)` }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full" />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <div className="bento-grid">
        {/* Welcome Card */}
        <div className="bento-card col-span-2">
          <h2 className="text-sm text-gray-400 mb-2">welcome</h2>
          <h1 className="text-4xl font-bold mb-4">
            Hi, I'm <span className="text-blue-400">Your Name</span>
          </h1>
          <p className="text-gray-300 text-lg">
            A software developer with a passion for creating beautiful and functional web experiences
          </p>
        </div>

        {/* About Card */}
        <div className="bento-card row-span-2">
          <h2 className="text-2xl font-bold mb-6">About me</h2>
          <p className="text-gray-300 text-lg mb-6">
            I specialize in building modern web applications using React, TypeScript, and other cutting-edge technologies.
          </p>
          <div className="space-y-4">
            <p className="text-lg text-gray-400">My tools:</p>
            <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
              <li>React</li>
              <li>TypeScript</li>
              <li>Node.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </div>

        {/* Resume Download Card */}
        <div className="bento-card">
          <h2 className="text-2xl font-bold mb-6">CV</h2>
          <p className="text-gray-300 mb-6">View and download my resume by clicking on the button below</p>
          <a 
            href="/resume.pdf" 
            target="_blank"
            className="inline-flex items-center px-6 py-3 bg-[#F97316] hover:bg-[#EA580C] text-white rounded-lg transition-colors duration-200 font-medium"
          >
            Download resume
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </a>
        </div>

        {/* Clock Card */}
        <div className="bento-card">
          <h2 className="text-lg text-gray-400 mb-4">Current Time</h2>
          <AnalogClock />
          <p className="text-xl font-bold mt-4">
            {time.toLocaleDateString('en-US', { 
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>

        {/* Contact Card */}
        <div className="bento-card">
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

        {/* Projects Card with Resume Link */}
        <div className="bento-card col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Featured Projects</h2>
            <a 
              href="/resume.pdf" 
              target="_blank"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-sm font-medium"
            >
              Download Resume
            </a>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-card-hover rounded-lg">
              <h3 className="text-xl font-bold mb-3">Project 1</h3>
              <p className="text-gray-300">Description of your amazing project</p>
            </div>
            <div className="p-6 bg-card-hover rounded-lg">
              <h3 className="text-xl font-bold mb-3">Project 2</h3>
              <p className="text-gray-300">Description of another cool project</p>
            </div>
          </div>
        </div>

        {/* Tech Stack Card */}
        <div className="bento-card col-span-3">
          <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-8">
            <div className="flex flex-col items-center space-y-2">
              <Cpu className="w-10 h-10 text-blue-400" />
              <span className="text-sm">C++</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Bot className="w-10 h-10 text-green-400" />
              <span className="text-sm">ROS</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Brain className="w-10 h-10 text-red-400" />
              <span className="text-sm">PyTorch</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <ReactIcon className="w-10 h-10 text-blue-400" />
              <span className="text-sm">React</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Server className="w-10 h-10 text-green-400" />
              <span className="text-sm">Node.js</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Linux className="w-10 h-10 text-yellow-400" />
              <span className="text-sm">Linux</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Docker className="w-10 h-10 text-blue-400" />
              <span className="text-sm">Docker</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Container className="w-10 h-10 text-blue-600" />
              <span className="text-sm">Kubernetes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
