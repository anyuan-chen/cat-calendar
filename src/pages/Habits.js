import React from "react";
import Navbar from "../components/Navbar";
import Habit from "../components/Habit";
import "./Habits.css";
import Footer from "../components/Footer";
//
export default function Habits() {
  return (
    <div>
      <Navbar></Navbar>
      <body class="body">
        <h1 class="gnome">Habit Builder</h1>
        <h2 class="header">
          Select a few of our pre-created habits to add to your schedule!
        </h2>
        <h2 class="header">Each habit will take up 15 minutes.</h2>
        <div class="selection">
          <div class="row1">
            <Habit name="Gaming" img="/img/Gaming.png"></Habit>
            <Habit name="Reading" img="/img/Book.png"></Habit>
            <Habit name="Chatting" img="/img/Chat.png"></Habit>
            <Habit name="Cleaning" img="/img/Clean.png"></Habit>
            <Habit name="Exercise" img="/img/Exercise.png"></Habit>
            <Habit name="Memeing" img="/img/Meme.png"></Habit>
            <Habit name="Watching" img="/img/Movie.png"></Habit>
            <Habit name="Listening" img="/img/Music.png"></Habit>
          </div>
          <div class = "row1">
            <Habit name="Organizing" img="/img/Organize.png"></Habit>
            <Habit name="Napping" img="/img/Sleep.png"></Habit>
            <Habit name="Snacking" img="/img/Snack.png"></Habit>
            <Habit name="Walking" img="/img/Walk.png"></Habit>
            <Habit name="Washing Hands" img="/img/WashHands.png"></Habit>
            <Habit name="Drinking" img="/img/Water.png"></Habit>
            <Habit name="Youtubing" img="/img/youtube.png"></Habit>
            <Habit name="Drawing" img="/img/Draw.png"></Habit>
          </div>
          
        </div>
        {/*<button type="submit">Next</button> */}
        <Footer></Footer>
      </body>
    </div>
  );
}
