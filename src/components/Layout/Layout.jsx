import React from 'react'
import Sidebar from '../Sidebar'
import Player from '../Player'

export default function Layout({children}) {
  return (
    <div className='flex h-screen'>
        <Sidebar />
        <main className='flex-1 overflow-y-auto'>{children}</main>
        <Player />
    </div>
  )
}
