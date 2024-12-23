const QuoteCard = () => {
  return (
    <div className="bento-card mt-4">
      <h2 className="text-2xl font-bold mb-4">Daily Inspiration</h2>
      <blockquote className="text-gray-300 italic">
        "The only way to do great work is to love what you do."
        <footer className="text-gray-400 mt-2">- Steve Jobs</footer>
      </blockquote>
    </div>
  );
};

export default QuoteCard;