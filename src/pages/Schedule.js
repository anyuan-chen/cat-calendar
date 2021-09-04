import React from "react";
import Navbar from "../components/Navbar";
import "./Schedule.css";
import Footer from "../components/Footer";

export default function Schedule() {
  return (
    <div>
        <Navbar></Navbar>
        <h1 id="yourSchedule">Your Schedule</h1>
        <Footer></Footer>
    </div>
  );
}