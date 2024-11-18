// src/app/library/page.js
import Header from '../../components/Header';
import PlaylistCard from '../../components/PlaylistCard';

export default function Library() {
  const savedPlaylists = [
    { id: 1, title: 'Road Trip', coverImage: '/images/road-trip.jpg' },
    { id: 2, title: 'Relax & Unwind', coverImage: '/images/relax.jpg' },
    { id: 3, title: 'Focus Beats', coverImage: '/images/focus.jpg' },
  ];

  return (
    <div>
      <Header title="Your Library" />
      <div className="p-5">
        <h2 className="text-2xl text-white mb-4">Saved Playlists</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {savedPlaylists.map((playlist) => (
            <PlaylistCard key={playlist.id} {...playlist} />
          ))}
        </div>
      </div>
    </div>
  );
}
