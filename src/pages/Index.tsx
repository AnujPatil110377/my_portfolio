import { useState, useEffect } from "react";
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
    <div className="min-h-screen bg-[#0A192F] text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-7xl mx-auto">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Welcome Card */}
          <div className="bg-[#112240] rounded-lg p-6 shadow-lg">
            <h2 className="text-sm text-[#8892B0] mb-2">welcome</h2>
            <div className="flex items-center space-x-8">
              <div>
                <h1 className="text-4xl font-bold mb-4">
                  Hi, I'm <span className="text-[#4FD1C5]">Your Name</span>
                </h1>
                <p className="text-[#8892B0] text-lg">
                  A software developer with a passion for creating beautiful and functional web experiences
                </p>
              </div>
              <AvatarGreeting />
            </div>
          </div>

          {/* About Card */}
          <div className="bg-[#112240] rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-[#4FD1C5]">About me</h2>
            <p className="text-[#8892B0] text-lg mb-6">
              I specialize in building modern web applications using React, TypeScript, and other cutting-edge technologies.
            </p>
            <div className="space-y-4">
              <p className="text-lg text-[#4FD1C5]">Interests and Hobbies:</p>
              <ul className="list-disc list-inside text-[#8892B0] text-lg space-y-2">
                <li>Computer Science</li>
                <li>Robotics</li>
                <li>Machine Learning</li>
                <li>Aeromodeling</li>
              </ul>
            </div>
          </div>

          {/* Connect Card */}
          <ConnectCard />

          {/* Experience and Education Cards */}
          <ExperienceCard />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Projects Card */}
          <div className="bg-[#112240] rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-[#4FD1C5]">Featured Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>

          {/* Achievements Card */}
          <div className="bg-[#112240] rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-[#4FD1C5]">Achievements</h2>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="border-l-2 border-[#4FD1C5] pl-4 py-2 hover:border-[#FF66C4] transition-all">
                  <h3 className="text-xl font-semibold text-[#FF66C4]">{achievement.title}</h3>
                  <p className="text-[#8892B0]">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;