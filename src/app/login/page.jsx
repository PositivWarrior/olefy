"use client";

import { useState, useEffect } from "react";
import PlayerControls from "./PlayerControls";

export default function Player({ currentSong }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentTime((prevTime) => {
          const nextTime = prevTime + 1;
          return nextTime >= currentSong?.duration ? currentSong?.duration : nextTime;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isPlaying, currentSong?.duration]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handlePlayPause = (playState) => {
    setIsPlaying(playState);
    console.log(playState ? "Playing" : "Paused");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t-2 border-brass text-white z-[9999]">
      <div className="flex items-center justify-between px-4 py-2">
        {/* Song Info */}
        <div className="flex-1">
          <h3 className="text-lg font-bold truncate">{currentSong?.title || "No Song Playing"}</h3>
          <p className="text-sm text-gray-400 truncate">{currentSong?.artist || "Unknown Artist"}</p>
        </div>

        {/* Player Controls */}
        <div className="flex-1 flex justify-center">
          <PlayerControls
            onPlayPause={handlePlayPause}
            onNext={() => console.log("Next track")}
            onPrevious={() => console.log("Previous track")}
            onRepeat={(isRepeat) => console.log(isRepeat ? "Repeat enabled" : "Repeat disabled")}
            onRandom={(isRandom) => console.log(isRandom ? "Random enabled" : "Random disabled")}
          />
        </div>

        {/* Time Display */}
        <div className="flex-1 flex justify-end">
          <p className="text-sm text-gray-400">
            {formatTime(currentTime)} / {formatTime(currentSong?.duration || 0)}
          </p>
        </div>
      </div>
    </div>
  );
}
