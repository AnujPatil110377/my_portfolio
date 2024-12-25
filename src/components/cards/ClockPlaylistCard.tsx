import React, { useState, useEffect } from 'react';
import { Music2, Clock } from 'lucide-react';

const formatTime = (time: Date) => {
  return time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
};

const SpotifyPlaylist = () => {
  return (
    <div className="mt-4 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-4 hover:from-gray-800 hover:to-gray-700 transition-all duration-300 group cursor-pointer">
      {/* Playlist Info */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Music2 className="w-5 h-5 text-green-400" />
          <span className="text-sm font-medium text-gray-300">PLAYLIST</span>
        </div>
        <h3 className="text-xl font-bold text-white">songs I was once hooked to</h3>
        <p className="text-sm text-gray-400">
          these songs are the ones that I was atleast once in my life obsessed with. obsessed as in, listen to it on repeat kinda obsessed
        </p>

        {/* Playlist Stats */}
        <div className="flex items-center space-x-4 text-sm text-gray-400 mt-4">
          <span className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>3hr 45min</span>
          </span>
          <span>• 42 songs</span>
        </div>
      </div>
    </div>
  );
};

const ClockPlaylistCard = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bento-card bg-[#26547C] p-6 rounded-xl">
      <div className="clock-section border-b border-gray-800 pb-6">
        <h2 className="text-lg text-gray-400 mb-4">Current Time</h2>
        <div className="text-4xl font-bold mb-4 text-white">
          {formatTime(time)}
        </div>
        <p className="text-xl font-bold mb-2 text-white">
          {time.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric'
          })}
        </p>
      </div>
      <SpotifyPlaylist />
    </div>
  );
};

export default ClockPlaylistCard;