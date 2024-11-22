"use client";

import React, { useState } from "react"; // Ensure useState is imported
import SongRow from "../../../components/SongRow";
import Player from "../../../components/Player";

export default function PlaylistPage({ params: paramsPromise }) {
  const params = use(paramsPromise);
  const { id } = params;

  const [currentSong, setCurrentSong] = useState(null);

  const mockSongs = [
    { title: "Song 1", artist: "Artist A", duration: "3:45" },
    { title: "Song 2", artist: "Artist B", duration: "4:12" },
    { title: "Song 3", artist: "Artist C", duration: "2:58" },
  ];

  const handleSongClick = (song) => {
    setCurrentSong(song);
    console.log(`Now playing: ${song.title}`);
  };

  return (
    <div className="p-5 text-white">
      <h1 className="text-3xl font-bold mb-4">Playlist {id}</h1>
      <div className="space-y-2">
        {mockSongs.map((song, index) => (
          <SongRow key={index} song={song} onClick={handleSongClick} />
        ))}
      </div>
      <Player currentSong={currentSong} />
    </div>
  );
}
