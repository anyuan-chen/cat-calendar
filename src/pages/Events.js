import React from "react";
import Navbar from "../components/Navbar";
import "./Events.css";
export default function Events() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <h1>Event Builder</h1>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Start Time</th>
              <th>End Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>hi</th>
              <th>hi</th>
              <th>hi</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
