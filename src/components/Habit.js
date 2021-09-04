import React from "react";
import "./Habit.css";

export default function Habit(props) {
  return (
      
    <div>
        <button type="button" id="habit">
            <img src={process.env.PUBLIC_URL + props.img} alt="missing"/> 
            <p id="buttLabel">{props.name}</p>
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