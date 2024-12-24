import { useState, useEffect } from "react";
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
import ConnectCard from "../components/cards/ConnectCard";
import ExperienceCard from "../components/cards/ExperienceCard";
import AvatarGreeting from "../components/cards/AvatarGreeting";
import QuoteCard from "../components/cards/QuoteCard";
import SpotifyPlaylist from "../components/cards/SpotifyPlaylist";
import ProjectCard from "../components/cards/ProjectCard";
import TechStackCard from "../components/cards/TechStackCard";

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
      description: "A full-stack web application built with React and Node.js",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      githubUrl: "https://github.com/username/project1",
      liveUrl: "https://project1.demo"
    },
    {
      name: "Project 2",
      description: "Mobile-first responsive design with modern animations",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      githubUrl: "https://github.com/username/project2",
      liveUrl: "https://project2.demo"
    },
    {
      name: "Project 3",
      description: "AI-powered data analytics dashboard",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      githubUrl: "https://github.com/username/project3",
      liveUrl: "https://project3.demo"
    },
    {
      name: "Project 4",
      description: "Real-time collaboration platform",
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9",
      githubUrl: "https://github.com/username/project4",
      liveUrl: "https://project4.demo"
    }
  ];

  const achievements = [
    {
      title: "JEE Advanced Ranking",
      description: "Ranked 6479 in JEE Advanced among 1.5M students"
    },
    {
      title: "Robotics Integration",
      description: "Integrated Khepera IV robot with UDP protocol for velocity commands"
    },
    {
      title: "LinkedIn Profile Extractor",
      description: "Created LinkedIn Profile Extractor using SQL and AWS"
    }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <div className="bento-grid">
        {/* Welcome Card */}
        <div className="bento-card col-span-2">
          <h2 className="text-sm text-gray-400 mb-2">welcome</h2>
          <div className="flex items-center space-x-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">
                Hi, I'm <span className="text-white">Your Name</span>
              </h1>
              <p className="text-gray-300 text-lg">
                A software developer with a passion for creating beautiful and functional web experiences
              </p>
            </div>
            <AvatarGreeting />
          </div>
        </div>

        {/* About Card */}
        <div className="bento-card row-span-2">
          <h2 className="text-2xl font-bold mb-6">About me</h2>
          <p className="text-gray-300 text-lg mb-6">
            I specialize in building modern web applications using React, TypeScript, and other cutting-edge technologies.
          </p>
          <div className="space-y-4">
            <p className="text-lg text-gray-400">Interests and Hobbies:</p>
            <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
              <li>Computer Science</li>
              <li>Robotics</li>
              <li>Machine Learning</li>
              <li>Aeromodeling</li>
            </ul>
          </div>
        </div>

        {/* CV Cards */}
        <div className="space-y-4">
          <div className="bento-card">
            <h2 className="text-2xl font-bold mb-6">CV</h2>
            <p className="text-gray-300 mb-6">View and download my resume by clicking on the button below</p>
            <a 
              href="/resume.pdf" 
              target="_blank"
              className="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-200 text-black rounded-lg transition-colors duration-200 font-medium"
            >
              Download resume
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          </div>
          <QuoteCard />
        </div>

        {/* Clock and Spotify Card */}
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
          <SpotifyPlaylist />
        </div>

        {/* Connect and Experience Cards */}
        <div className="space-y-4">
          <ConnectCard />
          <ExperienceCard />
        </div>

        {/* Projects Card */}
        <div className="bento-card col-span-2">
          <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
          <div className="grid grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>

        {/* Achievements Card */}
        <div className="bento-card col-span-2 mt-6">
          <h2 className="text-2xl font-bold mb-6">Achievements</h2>
          <div className="grid gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="bg-[#1a1a1a] p-6 rounded-lg hover:bg-[#242424] transition-all duration-300 border border-gray-800"
              >
                <h3 className="text-xl font-semibold mb-2 text-white">{achievement.title}</h3>
                <p className="text-gray-300">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Card */}
        <TechStackCard />
      </div>
    </div>
  );
};

export default Index;