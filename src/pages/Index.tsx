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
      name: "MIPS Web IDE",
      description: "Write, run, and debug MIPS code with AI-assisted error fixes.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      githubUrl: "https://github.com/AnujPatil110377/Mips_simulator",
      liveUrl: "https://project1.demo"
    },
    {
      name: "TweetSense Analyzer",
      description: " Gain insights into public sentiment, trends, and opinions in real time.",
      image: "data:image/jpeg;base64,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",
      githubUrl: "https://github.com/AnujPatil110377/Prml_project",
      liveUrl: "https://prmlproject-pfevkhw8iirkw3rythzv2c.streamlit.app/"
    },
    {
      name: "Swarm Control",
      description: "A control algorithm designed for real-time obstacle avoidance and path planning in Crazyflie drones.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD5oPi4eneS6DvczTHtmdOymHkhIbM2yeKjQ&s",
      githubUrl: "",
      liveUrl: "https://github.com/AnujPatil110377/CrazySwarm"
    },
    {
      name: "Project 4",
      description: "Real-time collaboration platform",
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9",
      githubUrl: "https://github.com/AnujPatil110377/linkedIn_Scraper",
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
              href="https://drive.google.com/file/d/1BVIGYSLYgCkN7JAdZN_W5q9cXaRSeVZW/view?usp=sharing"
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
