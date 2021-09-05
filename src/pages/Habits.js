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
            <Habit name="Gaming"img={process.env.PUBLIC_URL + "/img/Gaming.png"}></Habit>
            <Habit name="Reading"img={process.env.PUBLIC_URL + "/img/Book.png"}></Habit>
            <Habit name="Chatting"img={process.env.PUBLIC_URL + "/img/Chat.png"}></Habit>
            <Habit name="Cleaning"img={process.env.PUBLIC_URL + "/img/Clean.png"}></Habit>
            <Habit name="Exercise"img={process.env.PUBLIC_URL + "/img/Exercise.png"}></Habit>
            <Habit name="Memeing"img={process.env.PUBLIC_URL + "/img/Meme.png"}></Habit>
            <Habit name="Watching"img={process.env.PUBLIC_URL + "/img/Movie.png"}></Habit>
            <Habit name="Listening"img={process.env.PUBLIC_URL + "/img/Music.png"}></Habit>
          </div>
          <div class = "row1">
            <Habit name="Organizing"img={process.env.PUBLIC_URL + "/img/Organize.png"}></Habit>
            <Habit name="Napping"img={process.env.PUBLIC_URL + "/img/Sleep.png"}></Habit>
            <Habit name="Snacking"img={process.env.PUBLIC_URL + "/img/Snack.png"}></Habit>
            <Habit name="Walking"img={process.env.PUBLIC_URL + "/img/Walk.png"}></Habit>
            <Habit name="Washing Hands"img={process.env.PUBLIC_URL + "/img/WashHands.png"}></Habit>
            <Habit name="Drinking"img={process.env.PUBLIC_URL + "/img/Water.png"}></Habit>
            <Habit name="Youtubing"img={process.env.PUBLIC_URL + "/img/youtube.png"}></Habit>
            <Habit name="Drawing"img={process.env.PUBLIC_URL + "/img/Draw.png"}></Habit>
          </div>
          
        </div>
        {/*<button type="submit">Next</button> */}
        <Footer></Footer>
      </body>
    </div>
  );
}
