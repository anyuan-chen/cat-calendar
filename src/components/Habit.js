import React from "react";

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