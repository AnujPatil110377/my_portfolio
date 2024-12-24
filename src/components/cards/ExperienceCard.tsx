import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const ExperienceCard = () => {
  return (
    <div className="bg-[#112240] rounded-lg p-6 shadow-lg">
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
  );
};

export default ExperienceCard;