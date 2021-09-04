import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div>
      <nav>
        <div class="main">
          <a
            href="/home"
            src={process.env.PUBLIC_URL + "/img/Header cat.png"}
            alt="uh oh"
          />
          <a />
        </div>
        <div class="navigation">
          <Link to="/">
            <h2>Home</h2>
          </Link>
          <Link to="/events">
            <h2>Events</h2>
          </Link>
          <Link to="/habits">
            <h2>Habits</h2>
          </Link>
          <Link to="/schedule">
            <h2>Schedule</h2>
          </Link>
        </div>
      </nav>
    </div>
  );
}
