import React, { useState, useEffect } from 'react';
import { Music2, Clock, ExternalLink } from 'lucide-react';

const formatTime = (time) => {
  return time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
};

const SpotifyPlaylist = () => {
  const spotifyUrl = "https://open.spotify.com/playlist/5ExhAwDV0OV1DWcECTr2ZH?si=28b22f697ef142d0";

  return (
    <div className="mt-4 rounded-lg bg-gray-900 p-4 w-[550px] group relative">
      {/* Playlist Header with Right-aligned Image */}
      <div className="flex justify-between items-start">
        <div className="flex-grow space-y-2">
          <div className="flex items-center space-x-2">
            <Music2 className="w-6 h-4 text-gray-400" />
            <span className="text-sm text-gray-400">playlist:</span>
          </div>
          
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white">songs I was once hooked to</h3>
            <p className="text-sm text-gray-400">
              these songs are the ones that I was atleast once in my life obsessed with. obsessed as in, listen to it on repeat kinda obsessed
            </p>
          </div>
          
          {/* Stats */}
          <div className="flex items-center space-x-4 text-sm text-gray-400 mt-4">
            <span className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>3hr 17min</span>
            </span>
            <span>• 60 songs</span>
          </div>
        </div>
        
        {/* Right-aligned Image */}
        <div className="ml-4 w-40 h-40 flex-shrink-0">
          <img 
            src="data:image/jpeg;base64,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" 
            alt="Daylight album cover" 
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
      <a
              href={spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 transition-colors duration-200 flex items-center space-x-1"
            >
              <span>Open in Spotify</span>
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
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
    <div className="bento-card bg-gray-900 p-6 rounded-xl">
      <div className="clock-section border-b border-gray-800 pb-6">
        <h2 className="text-3xl text-gray-400 mb-4">Current Time</h2>
        <div className="text-6xl font-bold mb-4 text-white">
          {formatTime(time)}
        </div>
        <p className="text-6xl font-bold mb-2 text-white">
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