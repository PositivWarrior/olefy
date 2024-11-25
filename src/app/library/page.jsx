"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { fetchSpotifyData } from "../../utils/spotify";

export default function Library() {
  const { data: session } = useSession();
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    if (session) {
      fetchSpotifyData(session.accessToken, "me/playlists").then((data) => {
        setPlaylists(data.items);
      });
    }
  }, [session]);

  if (!session) {
    return <p>Please log in to see your library.</p>;
  }

  return (
    <div className="p-4 text-white">
      <h1 className="text-3xl font-bold mb-4">Your Playlists</h1>
      <ul>
        {playlists.map((playlist) => (
          <li key={playlist.id} className="mb-2">
            {playlist.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
