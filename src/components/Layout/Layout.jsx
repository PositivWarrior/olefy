import React from "react";
import Sidebar from "../Sidebar";
import Player from "../Player";
import Footer from "../Footer";
import "../styles/globals.css";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <div className="flex">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <main className="min-h-[calc(100vh-160px)] pb-[160px]">{children}</main>
            <Player />
          </div>
        </div>
         <Footer /> 
      </body>
    </html>
  );
}
