import { useState, useEffect } from "react";
import ConnectCard from "../components/cards/ConnectCard";
import ExperienceCard from "../components/cards/ExperienceCard";
import AvatarGreeting from "../components/cards/AvatarGreeting";
import QuoteCard from "../components/cards/QuoteCard";
import ProjectCard from "../components/cards/ProjectCard";
import TechStackCard from "../components/cards/TechStackCard";
import ClockPlaylistCard from "../components/cards/ClockPlaylistCard";
import AboutCard from "../components/cards/AboutCard";

const Index = () => {
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

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <div className="bento-grid">
        {/* Welcome Card */}
        <div className="bento-card col-span-2">
          <h2 className="text-sm text-gray-400 mb-2">welcome</h2>
          <div className="flex items-center space-x-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">
                Hi, I'm <span className="text-blue-400">Anuj Patil</span>
              </h1>
              <p className="text-gray-300 text-lg">
                A software developer with a passion for creating beautiful and functional web experiences
              </p>
            </div>
            <AvatarGreeting />
          </div>
        </div>

<<<<<<< HEAD
        {/* About Card */}
        <div className="bento-card row-span-2">
          <h2 className="text-2xl font-bold mb-6">About me</h2>
          <p className="text-gray-300 text-lg mb-6">
          Hello, I'm Anuj Patil, a Pre-final year undergraduate at IIT Jodhpur, pursuing a BTech in Electrical Engineering. I am passionate about Full Stack Development and Machine Learning, with a focus on building scalable applications and data-driven models. I actively engage in LeetCode to enhance my problem-solving abilities and have a strong foundation in data structures, algorithms, and optimization techniques. My goal is to create impactful solutions that drive innovation and solve real-world challenges.
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

=======
        {/* About Card */}
        <AboutCard />

>>>>>>> 3aacdf66fe82767a80a86abf47b422c351c76e48
        {/* CV Cards */}
        <div className="space-y-4">
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
          <QuoteCard />
        </div>

        {/* Clock and Playlist Card */}
        <ClockPlaylistCard />

        {/* Connect and Experience Cards */}
        <div className="space-y-4">
          <ConnectCard />
          <ExperienceCard />
        </div>

        {/* Projects Card */}
        <div className="bento-card col-span-2">
          <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
          <div className="grid grid-cols-2 gap-4">
            {projects.slice(0, 4).map((project, index) => (
              <ProjectCard key={index} {...project} />
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
