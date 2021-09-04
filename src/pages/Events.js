import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "./Events.css";
import Footer from "../components/Footer";
import Task from "../components/Task";

export default function Events() {
  const addToLocalStorage = (event) => {
    event.preventDefault();
    if (!localStorage.tasks) {
      localStorage.setItem(
        "tasks",
        JSON.stringify([
          {
            task: task,
            startTime: startTime,
            endTime: endTime,
          },
        ])
      );
    } else {
      let storedTasks = JSON.parse(localStorage.tasks);
      storedTasks.push({
        task: task,
        startTime: startTime,
        endTime: endTime,
      });
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }
  };
  const [task, setTask] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [prevTasks, setPrevTasks] = useState([]);
  useEffect(() => {
    if (localStorage.tasks) {
      setPrevTasks(JSON.parse(localStorage.tasks));
    }
  }, [localStorage]);
  return (
    <form onSubmit={addToLocalStorage}>
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
            {prevTasks.map((task) => {
              <Task
                name={task.task}
                start={task.startTime}
                end={task.endTime}
              ></Task>;
            })}
          </tbody>
        </table>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}
