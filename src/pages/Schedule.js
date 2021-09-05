import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./Schedule.css";
import Footer from "../components/Footer";
import algorithm from "../util/algorithm";

export default function Schedule() {
  const [schedule, setSchedule] = useState([]);
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
    scheduleArray = scheduleArray.slice(32, 80);
    setSchedule(scheduleArray);
    console.log(scheduleArray);
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <div class="iNeedAChiropractorSoBad">
        {/* <img src="/img/background.png" alt="background" /> */}
        <h1 id="yourSchedule">Your Schedule</h1>
        <div>
          {/* {<img
            id="path"
            src="/img/rectanglePath.png"
            alt="pink rectangle path"
          />} */}
          <div id="baseContainer">
            <div id="textInstructions">
              {

              }
            </div>
            <img id="dottedLine" src="/img/dotted line.png" alt="dotted line" />
            <div id="times">
              <h3 input type="text">
                8AM
              </h3>
              <h3 input type="text">
                9AM
              </h3>
              <h3 input type="text">
                10AM
              </h3>
              <h3 input type="text">
                11AM
              </h3>
              <h3 input type="text">
                12PM
              </h3>
              <h3 input type="text">
                1PM
              </h3>
              <h3 input type="text">
                2PM
              </h3>
              <h3 input type="text">
                3PM
              </h3>
              <h3 input type="text">
                4PM
              </h3>
              <h3 input type="text">
                5PM
              </h3>
              <h3 input type="text">
                6PM
              </h3>
              <h3 input type="text">
                7PM
              </h3>
              <h3 input type="text">
                8PM
              </h3>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
