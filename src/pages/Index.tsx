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

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  const projects = [
    {
      name: "Project 1",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      name: "Project 2",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      name: "Project 3",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    {
      name: "Project 4",
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9"
    }
  ];

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

        {/* Clock and Music Player Card */}
        <div className="bento-card">
          <h2 className="text-lg text-gray-400 mb-4">Current Time</h2>
          <div className="text-4xl font-bold mb-4">
            {formatTime(time)}
          </div>
          <p className="text-xl font-bold mb-6">
            {time.toLocaleDateString('en-US', { 
              month: 'long',
              day: 'numeric'
            })}
          </p>
          <div className="mt-4 border-t pt-4">
            <h3 className="text-lg text-gray-400 mb-2">Now Playing</h3>
            <audio
              controls
              className="w-full"
              src="/song.mp3"
            >
              Your browser does not support the audio element.
            </audio>
          </div>
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

        {/* Projects Card */}
        <div className="bento-card col-span-2">
          <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
          <div className="grid grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="p-4 bg-card-hover rounded-lg">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-48 object-cover rounded-lg mb-3"
                />
                <h3 className="text-xl font-bold">{project.name}</h3>
              </div>
            ))}
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
