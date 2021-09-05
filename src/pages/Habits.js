import React from 'react'
import Navbar from '../components/Navbar';
import Habit from '../components/Habit';
import './Habits.css';
import Footer from "../components/Footer";

export default function Habits() {
    return (
        <div class="container">
            <Navbar></Navbar>
            <div>
                <img src="/img/background.png" alt="background"/>
            </div>
            <body class="body">
                <h1 class="gnome">Habit Builder</h1>
                <h2 class="header">Select a few of our pre-created habits to add to your schedule!</h2>
                <h2 class="header">Each habit will take up 15 minutes.</h2>
                <div class="selection">
                    <Habit name="Gaming" img="/img/Gaming.png"></Habit>
                    <Habit></Habit>
                    <Habit></Habit>
                    <Habit></Habit>
                </div>
                {/*<button type="submit">Next</button> */}
                <Footer></Footer>
            </body>
            
        </div>
    )
}
