import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const ExperienceCard = () => {
  return (
    <div className="space-y-4">
      {/* Experience Timeline */}
      <div className="bento-card h-[200px] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4 text-[#4FD1C5]">Experience</h2>
        <div className="relative space-y-4">
          <div className="absolute left-2 top-0 h-full w-0.5 bg-[#4FD1C5]/20" />
          
          <div className="relative pl-6">
            <div className="absolute left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-[#4FD1C5]" />
            <h3 className="text-lg font-semibold text-[#4FD1C5]">Senior Developer</h3>
            <p className="text-[#8892B0]">Tech Corp • 2020 - Present</p>
            <div className="flex gap-2 mt-2 flex-wrap">
              <Badge variant="secondary" className="bg-[#112240] text-[#4FD1C5] hover:bg-[#1D3461]">React</Badge>
              <Badge variant="secondary" className="bg-[#112240] text-[#FF66C4] hover:bg-[#1D3461]">Node.js</Badge>
              <Badge variant="secondary" className="bg-[#112240] text-[#4FD1C5] hover:bg-[#1D3461]">AWS</Badge>
            </div>
          </div>

          <div className="relative pl-6">
            <div className="absolute left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-[#4FD1C5]" />
            <h3 className="text-lg font-semibold text-[#4FD1C5]">Full Stack Developer</h3>
            <p className="text-[#8892B0]">Dev Solutions • 2018 - 2020</p>
            <div className="flex gap-2 mt-2 flex-wrap">
              <Badge variant="secondary" className="bg-[#112240] text-[#FF66C4] hover:bg-[#1D3461]">JavaScript</Badge>
              <Badge variant="secondary" className="bg-[#112240] text-[#4FD1C5] hover:bg-[#1D3461]">Python</Badge>
              <Badge variant="secondary" className="bg-[#112240] text-[#FF66C4] hover:bg-[#1D3461]">Docker</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="bento-card bg-[#0A192F] hover:bg-[#112240] transition-all duration-300">
        <h2 className="text-2xl font-bold mb-6 text-[#4FD1C5]">Education</h2>
        <div className="space-y-6">
          <div className="border-l-2 border-[#4FD1C5] pl-4 transition-all duration-300 hover:border-[#FF66C4]">
            <h3 className="text-xl font-semibold text-[#FF66C4]">BTech Electrical Engineering</h3>
            <p className="text-[#8892B0] mb-1">IIT Jodhpur</p>
            <p className="text-sm text-[#8892B0]">2022 - present</p>
            <p className="text-[#8892B0] mt-2">
              Relevant coursework: Data Structures, Algorithms, Computer Networks
            </p>
          </div>
          
          <div className="border-l-2 border-[#4FD1C5] pl-4 transition-all duration-300 hover:border-[#FF66C4]">
            <h3 className="text-xl font-semibold text-[#FF66C4]">High School</h3>
            <p className="text-[#8892B0] mb-1">Delhi Public School</p>
            <p className="text-sm text-[#8892B0]">2020 - 2022</p>
            <p className="text-[#8892B0] mt-2">
              Major: Science with Computer Science
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;