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
    <div>
      <Navbar></Navbar>
      <form onSubmit={addToLocalStorage}>
        <div className="containerEvents">
          <h1 class="sigma">Event Builder</h1>
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
                  <tr >
                    <th className="PICNICS">{task.task}</th>
                    <th className="PICNICS">{task.startTime}</th>
                    <th className="PICNICS">{task.endTime}</th>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <input
            class="icbm"
            type="image"
            src={process.env.PUBLIC_URL + "/img/Submit_button.png"}
            alt="Submit"
          ></input>
        </div>
      </form>
      <img
        id="throwitback"
        src={process.env.PUBLIC_URL + "/img/background.png"}
        alt="background"
      />
      <Footer id="Footer"></Footer>
    </div>
  );
}
