import React from "react";
import "./Habit.css";

export default function Habit(props) {
  return (
      
    <div>
        <button type="button">
            <img src={props.img} />
            <p>{props.name}</p>
        </button>
    {/*
    the thing that was here before I experiment
    <tr>
        <td>{props.name}</td>
        <td>{props.img}</td>
    </tr>
    */}

    </div>
  );
}