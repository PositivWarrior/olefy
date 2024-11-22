"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle, faRepeat, faPlay, faPause, faForward, faBackward } from "@fortawesome/free-solid-svg-icons";

export default function PlayerControls({ onPlayPause, onNext, onPrevious, onRepeat, onRandom }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRandom, setIsRandom] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    console.log(isPlaying ? "Paused" : "Playing");
    onPlayPause && onPlayPause(!isPlaying);
  };

  const handleRepeat = () => {
    setIsRepeat(!isRepeat);
    console.log(isRepeat ? "Repeat disabled" : "Repeat enabled");
    onRepeat && onRepeat(!isRepeat);
  };

  const handleRandom = () => {
    setIsRandom(!isRandom);
    console.log(isRandom ? "Random disabled" : "Random enabled");
    onRandom && onRandom(!isRandom);
  };

  return (
    <div className="flex justify-center items-center space-x-6 bg-black py-4 text-brass">
      {/* Previous Button */}
      <button
        className="w-12 h-12 bg-black text-brass font-bold rounded-full flex justify-center items-center shadow-md hover:shadow-lg transition-transform transform hover:scale-110"
        onClick={() => {
          console.log("Previous track");
          onPrevious && onPrevious();
        }}
        aria-label="Previous"
      >
        <FontAwesomeIcon icon={faBackward} />
      </button>

      {/* Random Button */}
      <button
        className={`w-12 h-12 bg-black text-brass font-bold rounded-full flex justify-center items-center shadow-md hover:shadow-lg transition-transform transform hover:scale-110`}
        onClick={handleRandom}
        aria-label="Random"
      >
        <FontAwesomeIcon icon={faShuffle} />
      </button>

      {/* Play/Pause Button */}
      <button
        className="w-12 h-12 bg-black text-brass font-bold rounded-full flex justify-center items-center shadow-md hover:shadow-lg transition-transform transform hover:scale-110"
        onClick={handlePlayPause}
        aria-label="Play/Pause"
      >
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
      </button>

      {/* Repeat Button */}
      <button
        className={`w-12 h-12 bg-black text-brass font-bold rounded-full flex justify-center items-center shadow-md hover:shadow-lg transition-transform transform hover:scale-110`}
        onClick={handleRepeat}
        aria-label="Repeat"
      >
        <FontAwesomeIcon icon={faRepeat} />
      </button>

      {/* Next Button */}
      <button
        className="w-12 h-12 bg-black text-brass font-bold rounded-full flex justify-center items-center shadow-md hover:shadow-lg transition-transform transform hover:scale-110"
        onClick={() => {
          console.log("Next track");
          onNext && onNext();
        }}
        aria-label="Next"
      >
        <FontAwesomeIcon icon={faForward} />
      </button>
    </div>
  );
}
