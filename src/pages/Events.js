import React from "react";
import Navbar from "../components/Navbar";

export default function Events() {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h1>Event Builder</h1>
        <table>
          <tr>
            <th>Task</th>
            <th>Start Time</th>
            <th>End Time</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
