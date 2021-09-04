import React from "react";
import Navbar from "../components/Navbar";
import "./Events.css";
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
          
        </table>
      </div>
    </div>
  );
}
