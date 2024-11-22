export default function SongRow({ song, onClick }) {
  return (
    <div
      className="flex justify-between items-center p-3 bg-gray-800 rounded-md hover:bg-gray-700 cursor-pointer"
      onClick={() => onClick(song)}
    >
      <div>
        <h4 className="text-white">{song.title}</h4>
        <p className="text-gray-400 text-sm">{song.artist}</p>
      </div>
      <p className="text-gray-400 text-sm">{song.duration}</p>
    </div>
  );
}
