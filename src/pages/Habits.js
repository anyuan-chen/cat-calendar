import React from 'react'
import Navbar from '../components/Navbar';
import Habit from '../components/Habit.js';

export default function Habits() {
    return (
        <div>
            <Navbar></Navbar>
            <h1>Habit Builder</h1>
            <div class="selection">
                <Habit></Habit>
            </div>
        </div>
    )
}
