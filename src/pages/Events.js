import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./Events.css";
import Footer from "../components/Footer";

export default function Events() {
  const [task, setTask] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  return (
    <form onSubmit={() => {}}>
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
              <th>
                <input
                  type="text"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                ></input>
              </th>
              <th>
                <input
                  type="text"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                ></input>
              </th>
              <th>
                <input
                  type="text"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                ></input>
              </th>
            </tr>
          </tbody>
        </table>
        <button type="submit">Add</button>
      </div>
      <Footer></Footer>
    </form>
  );
}
