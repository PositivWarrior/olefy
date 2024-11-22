import Link from "next/link";

export default function PlaylistCard({ id, title }) {
  return (
    <Link href={`/playlist/${id}`} className="block bg-gray-800 p-4 rounded-lg hover:bg-gray-700">
      <h3 className="text-lg font-bold text-white">{title}</h3>
    </Link>
  );
}
