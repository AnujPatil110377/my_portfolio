import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  name: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl: string;
}

const ProjectCard = ({ name, description, image, githubUrl, liveUrl }: ProjectCardProps) => {
  return (
    <div className="relative group overflow-hidden rounded-lg bg-[#0A192F]">
      <img 
        src={image} 
        alt={name}
        className="w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
      />
      
      <div className="absolute inset-0 bg-[#0A192F]/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center p-4">
        <h3 className="text-xl font-bold text-[#4FD1C5] mb-2">{name}</h3>
        <p className="text-[#8892B0] text-sm mb-4 text-center">{description}</p>
        
        <div className="flex gap-4">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2 bg-transparent border-[#4FD1C5] text-[#4FD1C5] hover:bg-[#4FD1C5] hover:text-white transition-all duration-300"
            onClick={() => window.open(githubUrl, '_blank')}
          >
            <Github className="w-4 h-4" />
            GitHub
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2 bg-transparent border-[#FF66C4] text-[#FF66C4] hover:bg-[#FF66C4] hover:text-white transition-all duration-300"
            onClick={() => window.open(liveUrl, '_blank')}
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;