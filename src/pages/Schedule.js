import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import "./Schedule.css";
import Footer from "../components/Footer";
import algorithm from "../util/algorithm";

export default function Schedule() {
  const [schedule, setSchedule] 
  useEffect(() => {
    let tasks;
    if (localStorage.tasks) {
      tasks = JSON.parse(localStorage.tasks);
    }
    let habits;
    if (localStorage.habits) {
      habits = JSON.parse(localStorage.habits);
    }
    let scheduleArray;
    if (tasks && habits) {
      scheduleArray = algorithm(habits, tasks);
    }

  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <div class="iNeedAChiropractorSoBad">
        <img src="/img/background.png" alt="background" />
        <h1 id="yourSchedule">Your Schedule</h1>
        <div>
          <img
            id="path"
            src="/img/rectanglePath.png"
            alt="pink rectangle path"
          />
          <div>
            <img id="dottedLine" src="/img/dotted line.png" alt="dotted line" />
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
