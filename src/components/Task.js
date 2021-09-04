import React from "react";

export default function Task(props) {
  return (
    <div>
      <tr>
        <td>{props.name}</td>
        <td>{props.start}</td>
        <td>{props.end}</td>
      </tr>
    </div>
  );
}
