"use client";

import { useState } from "react";
import PlayerControls from "./PlayerControls";

export default function Player({ currentSong }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = (playState) => {
    setIsPlaying(playState);
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
            onPlayPause={(playState) => setIsPlaying(playState)}
          />
        </div>

        {/* Time Display */}
        <div className="flex-1 flex justify-end">
          <p className="text-sm text-gray-400">
            {currentSong?.time || "0:00 / 0:00"}
          </p>
        </div>
      </div>
    </div>
  );
}
