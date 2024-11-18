import Link from 'next/link';

export default function PlaylistCard({ id, title, coverImage }) {
  return (
    <Link href={`/playlist/${id}`} className="block bg-black border-2 border-brass p-4 rounded-lg hover:bg-gray-950 transition shadow-retro">
  <img
    src={coverImage}
    alt={title}
    className="w-full h-48 object-cover rounded-md mb-4 border border-brass"
  />
  <h3 className="text-lg font-retro text-brass">{title}</h3>
</Link>

  );
}
