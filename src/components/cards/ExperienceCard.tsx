import { Badge } from "@/components/ui/badge";

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
        <div className="bento-card h-[150px]">
          <h2 className="text-xl font-bold mb-4">Education</h2>
          <div>
            <h3 className="text-md font-semibold text-blue-400">BTech Electrical Engineering</h3>
            <p className="text-gray-400">IIT Jodhpur</p>
            <p className="text-sm text-gray-500">2022 - present</p>
          </div>
        </div>
        
        <div className="bento-card h-[150px]">
          <h2 className="text-xl font-bold mb-4">Achievements</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Dean's List 2023</li>
            <li>Hackathon Winner</li>
            <li>Research Paper Published</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;