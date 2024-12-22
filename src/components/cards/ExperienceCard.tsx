const ExperienceCard = () => {
  return (
    <div className="bento-card h-[200px]">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-blue-400">Senior Developer</h3>
          <p className="text-gray-400">Tech Corp • 2020 - Present</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-blue-400">Full Stack Developer</h3>
          <p className="text-gray-400">Dev Solutions • 2018 - 2020</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;