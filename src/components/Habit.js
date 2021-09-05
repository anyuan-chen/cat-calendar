import React, { useState } from "react";
import "./Habit.css";

export default function Habit(props) {
  const [selected, setSelected] = useState(false);
  const POKEMONGO = () => {
    setSelected(true);
    if (!localStorage.habits) {
      localStorage.setItem("habits", JSON.stringify([]));
    }
    let habits = JSON.parse(localStorage.habits);
    habits.push({ name: props.name });
    localStorage.setItem("habits", JSON.stringify(habits));
  };
  return (
    <div class="container">
      <button
        type="button"
        id="habit"
        className={selected ? "clicked" : "notClicked"}
        onClick={POKEMONGO}
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
