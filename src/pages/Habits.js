import React from "react";
import Navbar from "../components/Navbar";
import Habit from "../components/Habit";
import "./Habits.css";
import Footer from "../components/Footer";

export default function Habits() {
  return (
    <div class="albatross">
      <Navbar></Navbar>
      <body class="body">
        <h1 class="gnome">Habit Builder</h1>
        <div class="central-utility-mechanism">
          <h2 class="header">
            Select a few of our pre-created habits to add to your schedule! Each
            habit will take up to an hour.
          </h2>
          {/* <h2 class="header2">Each habit will take up an hour.</h2> */}
        </div>

        <div class="selection">
          <div class="row1">
            <Habit
              className="activity"
              name="Game"
              img="/img/Gaming.png"
            ></Habit>
            <Habit className="activity" name="Read" img="/img/Book.png"></Habit>
            <Habit className="activity" name="Chat" img="/img/Chat.png"></Habit>
            <Habit
              className="activity"
              name="Clean"
              img="/img/Clean.png"
            ></Habit>
            <Habit
              className="activity"
              name="Exercise"
              img="/img/Exercise.png"
            ></Habit>
            <Habit
              className="activity"
              name="Memes"
              img="/img/Meme.png"
            ></Habit>
            <Habit
              className="activity"
              name="Watching"
              img="/img/Movie.png"
            ></Habit>
            <Habit
              className="activity"
              name="Music"
              img="/img/Music.png"
            ></Habit>
          </div>
          <div class="row1">
            <Habit
              className="activity"
              name="Organize"
              img="/img/Organize.png"
            ></Habit>
            <Habit className="activity" name="Nap" img="/img/Sleep.png"></Habit>
            <Habit
              className="activity"
              name="Snack"
              img="/img/Snack.png"
            ></Habit>
            <Habit className="activity" name="Walk" img="/img/Walk.png"></Habit>
            <Habit
              className="activity"
              name="Wash Hands"
              img="/img/WashHands.png"
            ></Habit>
            <Habit
              className="activity"
              name="Get Water"
              img="/img/Water.png"
            ></Habit>
            <Habit
              className="activity"
              name="Youtube"
              img="/img/youtube.png"
            ></Habit>
            <Habit className="activity" name="Draw" img="/img/Draw.png"></Habit>
          </div>
        </div>
        <Footer></Footer>
      </body>
    </div>
  );
}
