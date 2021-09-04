import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div class="main">
        <a href="/home">
          <img
            src={process.env.PUBLIC_URL + "/img/Header cat.png"}
            alt="uh oh"
          />
<<<<<<< HEAD
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
=======
        </a>
      </div>
      <div class="navigation">
        <Link to="/" className="navlink">
          <h2>Home</h2>
        </Link>
        <Link to="/events" className="navlink">
          <h2>Events</h2>
        </Link>
        <Link to="/habits" className="navlink">
          <h2>Habits</h2>
        </Link>
      </div>
    </nav>
>>>>>>> efb38dc252dea187cdee21848fa18cd5a86912c6
  );
}
