import React from 'react'

export default function Header({title}) {
  return (
    <header className="bg-gray-900 p-4 text-white">
      <h1 className="text-2xl font-bold">{title}</h1>
    </header>
  );
}