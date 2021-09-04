import React from "react";
import { Link } from "react-router-dom";
import "./Habit.css";

export default function Habit(props) {
  return (
    <div>
      <tr>
        <td>{props.name}</td>
        <td>{props.img}</td>
      </tr>
    </div>
  );
}