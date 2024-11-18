import React from 'react'

export default function SongRow({title, artist}) {
  return (
    <div className="flex justify-between p-2 hover:bg-gray-800 rounded-md">
      <div>
        <h3 className="text-white">{title}</h3>
        <p className="text-gray-400 text-sm">{artist}</p>
      </div>
      <button className="text-green-500">Play</button>
    </div>
  );
}