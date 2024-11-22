import Footer from '@/components/Footer';
import PlaylistCard from '../components/PlaylistCard';
import Navbar from '@/components/Navbar';
import Link from 'next/link'

export default function Home() {
  const featuredPlaylists = [
    { id: 1, title: 'Chill Vibes', coverImage: '/images/chill-vibes.jpg' },
    { id: 2, title: 'Top Hits', coverImage: '/images/top-hits.jpg' },
    { id: 3, title: 'Jazz Classics', coverImage: '/images/jazz-classics.jpg' },
    { id: 4, title: 'Electronic Beats', coverImage: '/images/electronic-beats.jpg' },
  ];

  return (
    <div className="bg-black text-white min-h-screen">

      {/* Hero Section */}
      <section className="bg-leather bg-cover bg-center text-center p-8">
        <h1 className="text-4xl md:text-6xl font-retro text-brass shadow-retro mb-4">
          Welcome to Olefy
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-8">
          Discover, listen, and enjoy millions of songs.
        </p>
        <Link href="/login">
          <button className="px-6 py-3 bg-brass text-black font-bold rounded-lg shadow-md hover:bg-yellow-600 transition">
            Get Started
          </button>
        </Link>
      </section>

      {/* Featured Playlists Section */}
      <section className="p-8">
        <h2 className="text-3xl font-bold mb-6">Featured Playlists</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featuredPlaylists.map((playlist) => (
            <PlaylistCard key={playlist.id} {...playlist} />
          ))}
        </div>
      </section>

    </div>
  );
}
