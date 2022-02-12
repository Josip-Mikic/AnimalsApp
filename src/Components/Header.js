import React from "react";
export default function Header() {
  return (
    <div>
      <nav className="flex justify-around items-center	bg-black text-white	text-lg h-10">
        <a href="/">Vote</a>
        <a href="/">Breeds</a>
        <a href="/">Images/Search</a>
        <a href="/favorites">Favourites</a>
        <a href="/">Upload</a>
      </nav>
    </div>
  );
}
