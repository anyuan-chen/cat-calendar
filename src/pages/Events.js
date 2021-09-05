import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "./Events.css";
import Footer from "../components/Footer";

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
    setPrevTasks(JSON.parse(localStorage.tasks));
    setTask("");
    setStartTime("");
    setEndTime("");
  };
  const [task, setTask] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [prevTasks, setPrevTasks] = useState([]);

  useEffect(() => {
    if (localStorage.tasks) {
      setPrevTasks(JSON.parse(localStorage.tasks));
    }
  }, []);

  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div>
        <form id="pepelaugh" onSubmit={addToLocalStorage}>
          <div className="containerEvents">
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
                      id="eventsTextInput"
                    ></input>
                  </th>
                  <th>
                    <input
                      type="text"
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                      id="eventsTextInput"
                    ></input>
                  </th>
                  <th>
                    <input
                      type="text"
                      value={endTime}
                      onChange={(e) => setEndTime(e.target.value)}
                      id="eventsTextInput"
                    ></input>
                  </th>
                </tr>
                {prevTasks.map((task) => {
                  return (
                    <tr>
                      <th>{task.task}</th>
                      <th>{task.startTime}</th>
                      <th>{task.endTime}</th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <button id="eventsSubmitButton" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}
