import React, {useEffect} from "react";
import Navbar from "../components/Navbar";
import "./Schedule.css";
import Footer from "../components/Footer";
import {algorithm} from "../util/algorithm"

export default function Schedule() {
  useEffect(() => {
    const tasks = JSON.parse(localStorage.tasks);
    const habits = JSON.parse(localStorage.habits);
    const scheduleArray = algorithm(habits, tasks);
    
  }, [])
  return (
    <div>
        <Navbar></Navbar>
        <div class="iNeedAChiropractorSoBad">
        <img src="/img/background.png" alt="background"/>
        <h1 id="yourSchedule">Your Schedule</h1>
          <div>
            <img id="path" src="/img/rectanglePath.png" alt="pink rectangle path"/>
            <div>
              <img id="dottedLine" src="/img/dotted line.png" alt="dotted line"/>
            </div>
          </div>
        </div>
        
        <Footer></Footer>
    </div>
  );
}