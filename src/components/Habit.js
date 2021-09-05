import React, { useState } from "react";
import "./Habit.css";

export default function Habit(props) {
  const [selected, setSelected] = useState(false);

  return (
    <div class="container">
      <button
        type="button"
        id="habit"
        className={selected ? "clicked" : "notClicked"}
        onClick={() => setSelected(!selected)}
      >
        <img
          class="icon"
          src={process.env.PUBLIC_URL + props.img}
          alt="missing"
        />
      </button>
      <p id="buttLabel">{props.name}</p>
    </div>
  );
}
