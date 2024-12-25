import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faMusic, faHiking, faBook, faRobot, faPlane } from '@fortawesome/free-solid-svg-icons';
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
      githubUrl: "https://github.com/AnujPatil110377/CrazySwarm",
      liveUrl: ""
    },
    {
      name: "Linkedin Email Finder",
      description: "Web app that scrapes linkedin and finds Hr emails",
      image: "data:image/jpeg;base64,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",
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
            I'm an Electrical Engineering student at IIT Jodhpur, passionate about full-stack development and machine learning, focused on creating innovative solutions to real-world challenges.
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
                <FontAwesomeIcon icon={faRobot} className="text-gray-400" />
                <span>Robotics</span>
              </li>
              <li className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faPlane} className="text-gray-400" />
                <span>Aeromodeling</span>
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

          {/* Experience Card */}
          <div className="bento-card">
            <h2 className="text-2xl font-bold mb-4">Experience</h2>
            <div className="space-y-4">
              <div className="border-l-2 border-gray-600 pl-4">
                <h3 className="text-lg font-semibold text-gray-200">Research Assistant</h3>
                <p className="text-gray-400">Distributed Systems Lab, IIT Jodhpur</p>
                <p className="text-sm text-gray-500">2023 - 2024</p>
                <p className="text-gray-300 mt-2">Led development of key features and mentored junior developers.</p>
              </div>
            </div>

            {/* Achievements Section */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Achievements</h3>
              <ul className="list-none text-gray-300 space-y-3">
                <li>
                  Secured an <span className="text-white font-semibold">All India Rank of 6479</span> in <span className="text-white font-semibold">JEE Advanced</span>.
                </li>
                <li>
                  Achieved <span className="text-white font-semibold">8th rank</span> in the <span className="text-white font-semibold">Inter IIT Ideaforge High Prep</span> competition, out of 23 teams.
                </li>
                <li>
                  Co-authored a <span className="text-white font-semibold">research paper</span> presented at the <span className="text-white font-semibold">Indian Control Conference</span>.
                </li>
              </ul>
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
