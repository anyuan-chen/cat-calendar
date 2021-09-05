import React from "react";
import "./Habit.css";

export default function Habit(props) {
  return (
      
    <div class="container">
        <button type="button" id="habit">
            <img class="icon" src={process.env.PUBLIC_URL + props.img} alt="missing"/> 
        </button>
        <p id="buttLabel">{props.name}</p>
    </div>
  );
}