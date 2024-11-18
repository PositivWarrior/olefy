"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-brass border-b-2 border-brass shadow-retro">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <h1 className="text-xl font-retro">Olefy</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden px-4 py-2 border-brass border-2 text-brass rounded"
        >
          ☰
        </button>
        <ul className={`md:flex space-x-8 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <li>
            <Link href="/" className="hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link href="/library" className="hover:text-gray-300">Library</Link>
          </li>
          <li>
            <Link href="/search" className="hover:text-gray-300">Search</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
