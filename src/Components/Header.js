import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <nav className="flex justify-around items-center	bg-black text-white	text-lg h-10">
        <Link to="/">Vote</Link>
        <Link to="/">Breeds</Link>
        <Link to="/">Images/Search</Link>
        <Link to="/favorites">Favourites</Link>
        <Link to="/">Upload</Link>
      </nav>
    </div>
  );
}
