// src/components/Header.js
import React from "react";

const navLinks = [
  { name: "Characters", url: "/characters" },
  { name: "Comics", url: "/comics" },
  { name: "Movies", url: "/movies" },
  { name: "TV", url: "/tv" },
  { name: "Games", url: "/games" },
  { name: "Collectibles", url: "/collectibles" },
  { name: "Videos", url: "/videos" },
  { name: "Fans", url: "/fans" },
  { name: "News", url: "/news" },
  { name: "Shop", url: "/shop" },
];

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-list">
          {navLinks.map((link) => (
            <li key={link.name} className="nav-item">
              <a href={link.url} className="nav-link">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
