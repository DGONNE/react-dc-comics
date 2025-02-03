import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
        backgroundColor: "#fff",
      }}
    >
      <img
        src="public/images/dc-logo.png"
        alt="DC Logo"
        style={{ height: "50px" }}
      />
      <ul style={{ display: "flex", listStyle: "none", gap: "1rem" }}>
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
