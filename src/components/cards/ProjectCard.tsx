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
    <div className="relative group overflow-hidden rounded-lg">
      <img 
        src={image} 
        alt={name}
        className="w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
      />
      
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-gray-300 text-sm mb-4 text-center">{description}</p>
        
        <div className="flex gap-4">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
            onClick={() => window.open(githubUrl, '_blank')}
          >
            <Github className="w-4 h-4" />
            GitHub
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
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