import React from 'react'
import Navbar from '../components/Navbar';
import Habit from '../components/Habit';
import './Habits.css';
import Footer from "../components/Footer";

export default function Habits() {
    return (
        <div class="main">
            <Navbar></Navbar>
            <h1>Habit Builder</h1>
            <h2 class="header">Select a few of our pre-created habits to add to your schedule!</h2>
            <h2>Each habit will take up 15 minutes.</h2>
            <div class="selection">
                <Habit></Habit>
            </div>
            <Footer></Footer>
        </div>
    )
}
