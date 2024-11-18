export default function Search() {
    return (
      <div className="p-5">
        <h1 className="text-2xl font-bold text-white">Search</h1>
        <input
          type="text"
          placeholder="Search for songs, artists, or albums"
          className="w-full p-2 bg-gray-800 text-white rounded-md mt-4"
        />
        <div className="mt-4 text-white">Search results will appear here...</div>
      </div>
    );
  }
  