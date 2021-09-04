import React from "react";
import Navbar from "../components/Navbar";
import "./Events.css";
export default function Events() {
  return (
    <form>
      <Navbar></Navbar>
      <div className="container">
        <h1>Event Builder</h1>
          <table>
            <colgroup>
              <col class="w"></col>
            </colgroup>
            <thead>
              <tr>
                <th>Task</th>
                <th>Start Time</th>
                <th>End Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th><input type="text"></input></th>
                <th>hi</th>
                <th>hi</th>
              </tr>
            </tbody>
          </table>
      </div>
    </form>
  );
}
