import React from "react";

const Navbar = () => {
  return (
    <nav className="nav-style">
      <img
        className="imgnav-style"
        src="public/images/dc-logo.png"
        alt="DC Logo"
      />
      <ul className="ul-style">
        <li>Characters</li>
        <li>Comics</li>
        <li>Movies</li>
        <li>TV</li>
        <li>Games</li>
        <li>Collectibles</li>
        <li>Fans</li>
        <li>News</li>
        <li>Shop</li>
      </ul>
    </nav>
  );
};

export default Navbar;
