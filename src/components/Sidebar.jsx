import React from 'react'
import Link from 'next/link'

export default function Sidebar() {
  return (
    <div className='w-64 bg-black text-gray-200 p-5 flex flex-col'>
      <h1 className='text-2xl font-bold mb-8'>OleFy</h1>
      <nav>
        <Link href='/'><a className='block py-2'>Home</a></Link>
        <Link href='/search'><a className='block py-2'>Search</a></Link>
        <Link href='/library'><a className='block py-2'>Library</a></Link>
      </nav>
    </div>
  )
}
