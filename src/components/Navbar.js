import React from "react";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div>
      <nav>
        <div>
          <img src={process.env.PUBLIC_URL + "/img/Header cat.png"} alt="uh oh"/>;
        </div>
        <div>
          <h2>Habits</h2>
          <h2>Events</h2>
          <h2>Home</h2>
        </div>
      </nav>
    </div>
  );
}
