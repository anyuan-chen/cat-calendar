import React from "react";
import Navbar from "../components/Navbar";
import "./Instructions.css";
import Footer from "../components/Footer";

export default function Instructions() {
  return (
    <div>
      <Navbar></Navbar>
      <img
        id="page"
        src={process.env.PUBLIC_URL + "/img/instruction.png"}
        alt="background"
      />
      {/* 
            <body>
                <h1 id="title">How to use Cat Calendar</h1>
                <h3 id="subtitle">Cat Calendar is your adorable companion for practicing good habits, planning out your day, and more. We help you create a schedule within 3 simple sections. Input your information and enjoy!</h3>
                <div>
                    <div> 
                        <h1 class="title">Events</h1>
                        <img class="paw" src={"https://cdn.discordapp.com/attachments/880523574975299684/884208937388367912/1_Events_paw.png"} alt="background"/>
                        <img class="number" src={process.env.PUBLIC_URL + "img/one.png"} alt="background"/>
                        <h2 id="a">Go to Events and fill out relevant sections. Remember to press submit to save your changes!</h2>
                    </div>
                    <div>
                        <h1 class="title">Habits</h1>
                        <img class="paw" src={"https://cdn.discordapp.com/attachments/880523574975299684/884208935656095774/2_Habits_paw.png"} alt="background"/>
                        <img class="number" src={process.env.PUBLIC_URL + "img/two.png"} alt="background"/>
                        <h2 id="b">Visit Habits to add some optional but recommended breaks and additional sections.</h2>
                    </div>
                    <div>
                        <h1 class="title">Schedule</h1>
                        <img class="paw" src={"https://cdn.discordapp.com/attachments/880523574975299684/884208938755690496/3_schedule_paw.png"} alt="background"/>
                        <img class="number" src={process.env.PUBLIC_URL + "img/three.png"} alt="background"/>
                        <h2 id="c">Check our your Schedule and enjoy the cats!</h2>
                    </div>
                </div>
            </body> */}
      <Footer></Footer>
    </div>
  );
}
