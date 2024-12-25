// import { Badge } from "@/components/ui/badge";
// import { ScrollArea } from "@/components/ui/scroll-area";

// const ExperienceCard = () => {
//   return (
//     <div className="space-y-4">
//       {/* Experience Timeline */}
//       <div className="bento-card h-[200px] overflow-y-auto bg-[#0A192F] hover:bg-[#112240]">
//         <h2 className="text-2xl font-bold mb-4 text-[--primary]">Experience</h2>
//         <div className="relative space-y-4">
//           <div className="absolute left-2 top-0 h-full w-0.5 bg-[--primary]/20" />
          
//           <div className="relative pl-6">
//             <div className="absolute left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-[--primary]" />
//             <h3 className="text-lg font-semibold text-[--primary]">Senior Developer</h3>
//             <p className="text-[#8892B0]">Tech Corp • 2020 - Present</p>
//             <div className="flex gap-2 mt-2 flex-wrap">
//               <Badge variant="secondary" className="bg-[#112240] text-[--primary] hover:bg-[#1D3461]">React</Badge>
//               <Badge variant="secondary" className="bg-[#112240] text-[#FF66C4] hover:bg-[#1D3461]">Node.js</Badge>
//               <Badge variant="secondary" className="bg-[#112240] text-[--primary] hover:bg-[#1D3461]">AWS</Badge>
//             </div>
//           </div>

//           <div className="relative pl-6">
//             <div className="absolute left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-[--primary]" />
//             <h3 className="text-lg font-semibold text-[--primary]">Full Stack Developer</h3>
//             <p className="text-[#8892B0]">Dev Solutions • 2018 - 2020</p>
//             <div className="flex gap-2 mt-2 flex-wrap">
//               <Badge variant="secondary" className="bg-[#112240] text-[#FF66C4] hover:bg-[#1D3461]">JavaScript</Badge>
//               <Badge variant="secondary" className="bg-[#112240] text-[--primary] hover:bg-[#1D3461]">Python</Badge>
//               <Badge variant="secondary" className="bg-[#112240] text-[#FF66C4] hover:bg-[#1D3461]">Docker</Badge>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Education Section */}
//       <div className="bento-card bg-[#0A192F] hover:bg-[#112240] transition-all duration-300">
//         <h2 className="text-2xl font-bold mb-6 text-[--primary]">Education</h2>
//         <div className="space-y-6">
//           <div className="border-l-2 border-[--primary] pl-4 transition-all duration-300 hover:border-[#FF66C4]">
//             <h3 className="text-xl font-semibold text-[#FF66C4]">BTech Electrical Engineering</h3>
//             <p className="text-[#8892B0] mb-1">IIT Jodhpur</p>
//             <p className="text-sm text-[#8892B0]">2022 - present</p>
//             <p className="text-[#8892B0] mt-2">
//               Relevant coursework: Data Structures, Algorithms, Computer Networks
//             </p>
//           </div>
          
//           <div className="border-l-2 border-[--primary] pl-4 transition-all duration-300 hover:border-[#FF66C4]">
//             <h3 className="text-xl font-semibold text-[#FF66C4]">High School</h3>
//             <p className="text-[#8892B0] mb-1">Delhi Public School</p>
//             <p className="text-sm text-[#8892B0]">2020 - 2022</p>
//             <p className="text-[#8892B0] mt-2">
//               Major: Science with Computer Science
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExperienceCard;
// import { Badge } from "@/components/ui/badge";

// const ExperienceCard = () => {
//   return (
//     <div className="space-y-4">
//       {/* Experience Timeline */}
//       <div className="bento-card h-[200px] overflow-y-auto bg-var(--card) hover:bg-var(--hover-bg-color)">
//         <h2 className="text-2xl font-bold mb-4 text-var(--primary)">Experience</h2>
//         <div className="relative space-y-4">
//           {/* Vertical timeline line */}
//           <div className="absolute left-2 top-0 h-full w-0.5 bg-var(--text-muted-color)" />

//           {/* Senior Developer */}
//           <div className="relative pl-6">
//             <div className="absolute left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-var(--primary)" />
//             <h3 className="text-lg font-semibold text-var(--primary)">Senior Developer</h3>
//             <p className="text-var(--text-muted-color)">Tech Corp • 2020 - Present</p>
//             <div className="flex gap-2 mt-2 flex-wrap">
//               <Badge className="bg-var(--badge-bg-color) text-var(--primary) hover:bg-var(--hover-badge-bg-color)">React</Badge>
//               <Badge className="bg-var(--badge-bg-color) text-var(--primary) hover:bg-var(--hover-badge-bg-color)">Node.js</Badge>
//               <Badge className="bg-var(--badge-bg-color) text-var(--primary) hover:bg-var(--hover-badge-bg-color)">AWS</Badge>
//             </div>
//           </div>

//           {/* Full Stack Developer */}
//           <div className="relative pl-6">
//             <div className="absolute left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-var(--primary)" />
//             <h3 className="text-lg font-semibold text-var(--primary)">Full Stack Developer</h3>
//             <p className="text-var(--text-muted-color)">Dev Solutions • 2018 - 2020</p>
//             <div className="flex gap-2 mt-2 flex-wrap">
//               <Badge className="bg-var(--badge-bg-color) text-var(--primary) hover:bg-var(--hover-badge-bg-color)">JavaScript</Badge>
//               <Badge className="bg-var(--badge-bg-color) text-var(--primary) hover:bg-var(--hover-badge-bg-color)">Python</Badge>
//               <Badge className="bg-var(--badge-bg-color) text-var(--primary) hover:bg-var(--hover-badge-bg-color)">Docker</Badge>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Education Section */}
//       <div className="bento-card bg-var(--card) hover:bg-var(--hover-bg-color) transition-all duration-300">
//         <h2 className="text-2xl font-bold mb-6 text-var(--primary)">Education</h2>
//         <div className="space-y-6">
//           {/* BTech */}
//           <div className="border-l-2 border-var(--primary) pl-4 transition-all duration-300">
//             <h3 className="text-xl font-semibold text-var(--primary)">BTech Electrical Engineering</h3>
//             <p className="text-var(--text-muted-color) mb-1">IIT Jodhpur</p>
//             <p className="text-sm text-var(--text-muted-color)">2022 - Present</p>
//             <p className="text-var(--text-muted-color) mt-2">Relevant coursework: Data Structures, Algorithms, Computer Networks</p>
//           </div>

//           {/* High School */}
//           <div className="border-l-2 border-var(--primary) pl-4 transition-all duration-300">
//             <h3 className="text-xl font-semibold text-var(--primary)">High School</h3>
//             <p className="text-var(--text-muted-color) mb-1">Delhi Public School</p>
//             <p className="text-sm text-var(--text-muted-color)">2020 - 2022</p>
//             <p className="text-var(--text-muted-color) mt-2">Major: Science with Computer Science</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import React from 'react';
import { BookOpen, GraduationCap } from 'lucide-react';
import { motion } from "framer-motion";

const EducationCard = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}  {/* Slightly faster animation */}
      className="bento-card bg-[#121212] rounded-lg border-2 border-[#2a2a2a] group transition-all duration-300 hover:bg-[#1e1e1e] hover:scale-105 hover:shadow-lg"
    >
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}  {/* Slightly faster animation */}
        className="text-3xl font-bold text-white mb-3"  {/* One-unit reduced margin-bottom */}
      >
        Education
      </motion.h2>
      
      <div className="space-y-8"> {/* Keep the space-y value unchanged */}
        {/* BTech Education */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}  {/* Slightly faster animation */}
          whileHover={{ x: 10 }}
          className="flex items-start gap-4"
        >
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="mt-1 p-2 bg-[#1e1e1e] rounded-full group-hover:bg-[#2a2a2a]"
          >
            <GraduationCap className="w-6 h-6 text-blue-400" />
          </motion.div>
          <div>
            <div className="text-gray-400">2022 - Present</div>
            <h3 className="text-xl font-semibold text-blue-400 mt-1 transition-colors duration-300">
              BTech Electrical Engineering
            </h3>
            <div className="text-gray-300 mt-1">IIT Jodhpur</div>
          </div>
        </motion.div>

        {/* High School Education */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}  {/* Slightly faster animation */}
          whileHover={{ x: 10 }}
          className="flex items-start gap-4"
        >
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="mt-1 p-2 bg-[#1e1e1e] rounded-full group-hover:bg-[#2a2a2a]"
          >
            <BookOpen className="w-6 h-6 text-blue-400" />
          </motion.div>
          <div>
            <div className="text-gray-400">2020 - 2022</div>
            <h3 className="text-xl font-semibold text-blue-400 mt-1 transition-colors duration-300">
              High School
            </h3>
            <div className="text-gray-300 mt-1">Delhi Public School</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default EducationCard;

