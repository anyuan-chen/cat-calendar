import React from "react";
import Navbar from "../components/Navbar";
import Habit from "../components/Habit";
import "./Habits.css";
import Footer from "../components/Footer";

export default function Habits() {
  return (
    <div>
      <Navbar></Navbar>
      <body class="body">
        <h1 class="gnome">Habit Builder</h1>
        <h2 class="header">
          Select a few of our pre-created habits to add to your schedule!
        </h2>
        <h2 class="header2">Each habit will take up 15 minutes.</h2>
        <div class="selection">
          <div class="row1">
            <Habit className="activity" name="Gaming" img="/img/Gaming.png"></Habit>
            <Habit className="activity" name="Reading" img="/img/Book.png"></Habit>
            <Habit className="activity" name="Chatting" img="/img/Chat.png"></Habit>
            <Habit className="activity" name="Cleaning" img="/img/Clean.png"></Habit>
            <Habit className="activity" name="Exercise" img="/img/Exercise.png"></Habit>
            <Habit className="activity" name="Memeing" img="/img/Meme.png"></Habit>
            <Habit className="activity" name="Watching" img="/img/Movie.png"></Habit>
            <Habit className="activity" name="Listening" img="/img/Music.png"></Habit>
          </div>
          <div class = "row1">
            <Habit className="activity" name="Organizing" img="/img/Organize.png"></Habit>
            <Habit className="activity" name="Napping" img="/img/Sleep.png"></Habit>
            <Habit className="activity" name="Snacking" img="/img/Snack.png"></Habit>
            <Habit className="activity" name="Walking" img="/img/Walk.png"></Habit>
            <Habit className="activity" name="Washing" img="/img/WashHands.png"></Habit>
            <Habit className="activity" name="Drinking" img="/img/Water.png"></Habit>
            <Habit className="activity" name="Youtubing" img="/img/youtube.png"></Habit>
            <Habit className="activity" name="Drawing" img="/img/Draw.png"></Habit>
          </div>
        </div>
        <Footer></Footer>
      </body>
    </div>
  );
}
