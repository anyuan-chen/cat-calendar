import React from "react";
import Navbar from "../components/Navbar";
import "./Schedule.css";
import Footer from "../components/Footer";

export default function Schedule() {
  return (
    <div>
        <Navbar></Navbar>
        <div class="iNeedAChiropractorSoBad">
        <img src="/img/background.png" alt="background"/>
        <h1 id="yourSchedule">Your Schedule</h1>
        </div>
        
        <Footer></Footer>
    </div>
  );
}