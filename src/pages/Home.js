import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar";

export default function Home(props) {
  return (
    <div>
      <Navbar></Navbar>
      <img src={process.env.PUBLIC_URL + "/img/homepage.jpeg"} />
    </div>
  );
}
