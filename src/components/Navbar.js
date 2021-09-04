import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div>
      <nav>
        <div>
          <img src="https://i.imgur.com/srCUbCA.png" alt="cat??"></img>
        </div>
        <div>
          <Link to="/home">
            <h2>Home</h2>
          </Link>
          <Link to="/habits">
            <h2>Habits</h2>
          </Link>
          <Link to="/habits">
            <h2>Events</h2>
          </Link>
        </div>
      </nav>
    </div>
  );
}
