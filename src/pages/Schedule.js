import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import "./Schedule.css";
import Footer from "../components/Footer";
import algorithm from "../util/algorithm";

export default function Schedule() {
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
          <div id="times">
            <ul>
              
            <label input type="text">8AM</label>
            <label input type="text">9AM</label>
            <label input type="text">10AM</label>
            <label input type="text">11AM</label>
            <label input type="text">12PM</label>
            <label input type="text">1PM</label>
            <label input type="text">2PM</label>
            <label input type="text">3PM</label>
            <label input type="text">4PM</label>
            <label input type="text">5PM</label>
            <label input type="text">6PM</label>
            <label input type="text">7PM</label>
            <label input type="text">8PM</label>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
