import React, { useState, useEffect } from 'react';
import { Music2, Clock, ExternalLink, Play } from 'lucide-react';

const formatTime = (time) => {
  return time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
};

const SpotifyPlaylist = () => {
  const spotifyUrl = "https://open.spotify.com/playlist/YOUR_PLAYLIST_ID";

  return (
    <div className="mt-4 rounded-lg bg-gray-900 p-4 group relative">
      {/* Playlist Header with Image */}
      <div className="flex items-start space-x-4">
        <div className="w-20 h-20 flex-shrink-0">
          <img 
            src="./download.jpg" 
            // alt="Daylight album cover" 
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        
        <div className="flex-grow space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Music2 className="w-5 h-5 text-green-400" />
              <span className="text-sm font-medium text-gray-300">playlist:</span>
            </div>
            <a
              href={spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
            >
              <Play className="w-5 h-5 text-black fill-black ml-1" />
            </a>
          </div>
          <h3 className="text-xl font-bold text-white">songs I was once hooked to</h3>
          <p className="text-sm text-gray-400">
            these songs are the ones that I was atleast once in my life obsessed with. obsessed as in, listen to it on repeat kinda obsessed
          </p>
        </div>
      </div>
      
      {/* Playlist Stats and Link */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center space-x-4 text-sm text-gray-400">
          <span className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>3hr 45min</span>
          </span>
          <span>• 42 songs</span>
        </div>
        <a
          href={spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-green-400 hover:text-green-300 transition-colors duration-200 flex items-center space-x-1"
        >
          <span>Open in Spotify</span>
          <ExternalLink className="w-3 h-3" />
        </a>
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
    <div className="bento-card bg-gray-900 p-6 rounded-xl">
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