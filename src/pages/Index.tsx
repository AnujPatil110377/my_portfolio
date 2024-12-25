import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faMusic, faHiking, faBook } from '@fortawesome/free-solid-svg-icons';
import ConnectCard from "../components/cards/ConnectCard";
import ExperienceCard from "../components/cards/ExperienceCard";
import AvatarGreeting from "../components/cards/AvatarGreeting";
import QuoteCard from "../components/cards/QuoteCard";
import ProjectCard from "../components/cards/ProjectCard";
import TechStackCard from "../components/cards/TechStackCard";
import ClockPlaylistCard from "../components/cards/ClockPlaylistCard";

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
        <div className="bento-card col-span-2 relative">
          <h2 className="text-lg text-gray-400 mb-2">Hola!</h2>
          <div className="flex items-center justify-between space-x-12">
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-4">
                Hi, I'm <span className="text-blue-400">Anuj Patil</span>
              </h1>
              <p className="text-gray-300 text-lg">
                I am a passionate <span className="text-blue-400 font-semibold">software developer</span> with a strong focus on <span className="text-blue-400 font-semibold">cloud services</span>, <span className="text-blue-400 font-semibold">microservices</span>, and <span className="text-blue-400 font-semibold">IoT technologies</span>. My interests extend to <span className="text-blue-400 font-semibold">machine learning</span> and <span className="text-blue-400 font-semibold">robotics</span>, where I enjoy aeromodelling as a hobby. With a solid foundation in core computer science concepts like <span className="text-blue-400 font-semibold">data structures</span> and <span className="text-blue-400 font-semibold">algorithms</span>, I continuously hone my skills through competitive coding on <span className="text-blue-400 font-semibold">LeetCode</span>. The fascinating fields of <span className="text-blue-400 font-semibold">deep learning</span> and <span className="text-blue-400 font-semibold">large language models (LLMs)</span> motivate me to stay at the forefront of technology.
              </p>
            </div>
            <div className="flex-shrink-0 ml-8">
              <AvatarGreeting />
            </div>
          </div>
        </div>

        {/* About Card */}
        <div className="bento-card row-span-1">
          <h2 className="text-2xl font-bold mb-6">About me</h2>
          <p className="text-gray-300 text-md mb-6">
          I’m an Electrical Engineering student at IIT Jodhpur, passionate about full-stack development and machine learning, focused on creating innovative solutions to real-world challenges.
          </p>
          <div className="space-y-4">
            <p className="text-md text-gray-400">Things I do other than coding:</p>
            <ul className="list-none text-gray-300 text-md space-y-2">
              <li className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faCamera} className="text-gray-400" />
                <span>Photography</span>
              </li>
              <li className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faMusic} className="text-gray-400" />
                <span>Music</span>
              </li>
              <li className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faHiking} className="text-gray-400" />
                <span>Hiking</span>
              </li>
              <li className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faBook} className="text-gray-400" />
                <span>Reading</span>
              </li>
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

        {/* Clock and Spotify Card */}
        <ClockPlaylistCard />

        {/* Connect and Experience Cards */}
        <div className="space-y-4">
          <ConnectCard />
          <ExperienceCard />
        </div>

        {/* Projects and Additional Experience Section */}
        <div className="grid grid-cols-3 gap-4 col-span-3">
          {/* Your existing Projects Card - keep as is */}
          <div className="bento-card col-span-2">
            <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
            <div className="grid grid-cols-2 gap-4">
              {projects.slice(0, 4).map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>

          {/* New Additional Experience Card */}
          <div className="bento-card">
            <h2 className="text-2xl font-bold mb-4">Additional Experience</h2>
            <div className="space-y-4">
              <div className="border-l-2 border-gray-600 pl-4">
                <h3 className="text-lg font-semibold text-gray-200">Senior Developer</h3>
                <p className="text-gray-400">Tech Company</p>
                <p className="text-sm text-gray-500">2022 - Present</p>
                <p className="text-gray-300 mt-2">Led development of key features and mentored junior developers.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Card */}
        <TechStackCard />
      </div>
    </div>
  );
};

export default Index;
