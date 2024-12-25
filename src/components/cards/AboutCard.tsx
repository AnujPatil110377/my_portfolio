import { Code, Music, BookOpen, Gamepad } from 'lucide-react';

const AboutCard = () => {
  const hobbies = [
    { name: 'Coding', icon: Code, color: 'text-blue-400', bgColor: 'bg-blue-400/20' },
    { name: 'Music', icon: Music, color: 'text-purple-400', bgColor: 'bg-purple-400/20' },
    { name: 'Reading', icon: BookOpen, color: 'text-green-400', bgColor: 'bg-green-400/20' },
    { name: 'Gaming', icon: Gamepad, color: 'text-red-400', bgColor: 'bg-red-400/20' }
  ];
  
  return (
    <div className="bento-card row-span-2">
      <h2 className="text-2xl font-bold mb-6">About me</h2>
      <p className="text-gray-300 text-base mb-8">
  Hello, I'm <span className="text-blue-400 font-semibold">Anuj Patil</span>, 
  a Pre-final year undergraduate at <span className="text-blue-400 font-semibold">IIT Jodhpur</span> in 
  Electrical Engineering. I'm passionate about 
  <span className="text-blue-400 font-semibold"> Full Stack Development</span> and 
  <span className="text-blue-400 font-semibold"> Machine Learning</span>. I actively solve problems on
  <span className="text-blue-400 font-semibold"> LeetCode</span> and have expertise in 
  <span className="text-blue-400 font-semibold"> data structures</span> and 
  <span className="text-blue-400 font-semibold"> algorithms</span>. 
  I aim to create innovative solutions that solve real-world challenges.
</p>

      
      <div className="space-y-4">
        <p className="text-lg text-gray-400">My hobbies:</p>
        <div className="grid grid-cols-2 gap-4">
          {hobbies.map((hobby, index) => {
            const IconComponent = hobby.icon;
            return (
              <div 
                key={index}
                className="group flex items-center space-x-3 p-3 rounded-lg 
                          bg-gray-800/50 hover:bg-gray-700/50 
                          transition-all duration-300 transform 
                          hover:scale-105 cursor-pointer"
              >
                <div className={`p-2 rounded-lg ${hobby.bgColor}`}>
                  <IconComponent 
                    className={`w-6 h-6 ${hobby.color} 
                              transition-transform duration-300 
                              group-hover:scale-110`}
                  />
                </div>
                <span className="text-gray-300 text-lg">{hobby.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutCard;