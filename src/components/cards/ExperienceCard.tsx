import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const ExperienceCard = () => {
  return (
    <div className="space-y-4">
      {/* Experience Timeline */}
      <div className="bento-card h-[200px] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Experience</h2>
        <div className="relative space-y-4">
          <div className="absolute left-2 top-0 h-full w-0.5 bg-blue-400/20" />
          
          <div className="relative pl-6">
            <div className="absolute left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-400" />
            <h3 className="text-lg font-semibold text-blue-400">Senior Developer</h3>
            <p className="text-gray-400">Tech Corp • 2020 - Present</p>
            <div className="flex gap-2 mt-2 flex-wrap">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">Node.js</Badge>
              <Badge variant="secondary">AWS</Badge>
            </div>
          </div>

          <div className="relative pl-6">
            <div className="absolute left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-400" />
            <h3 className="text-lg font-semibold text-blue-400">Full Stack Developer</h3>
            <p className="text-gray-400">Dev Solutions • 2018 - 2020</p>
            <div className="flex gap-2 mt-2 flex-wrap">
              <Badge variant="secondary">JavaScript</Badge>
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">Docker</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Education and Achievements */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bento-card h-[150px] bg-[#0A192F] hover:bg-[#112240] transition-all duration-300">
          <h2 className="text-xl font-bold mb-4 text-[#4FD1C5]">Education</h2>
          <div>
            <h3 className="text-md font-semibold text-[#FF66C4]">BTech Electrical Engineering</h3>
            <p className="text-[#8892B0]">IIT Jodhpur</p>
            <p className="text-sm text-[#8892B0]">2022 - present</p>
          </div>
        </div>
        
        <div className="bento-card h-[150px] bg-[#0A192F] hover:bg-[#112240] transition-all duration-300">
          <ScrollArea className="h-full pr-4">
            <h2 className="text-xl font-bold mb-4 text-[#4FD1C5]">Achievements</h2>
            <ul className="space-y-4">
              {["Dean's List 2023", "Hackathon Winner", "Research Paper Published"].map((achievement, index) => (
                <li 
                  key={index}
                  className="text-base leading-relaxed text-[#8892B0] hover:text-[#FF66C4] transition-colors duration-300 pl-4 border-l-2 border-[#4FD1C5] hover:border-[#FF66C4]"
                >
                  {achievement}
                </li>
              ))}
            </ul>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;