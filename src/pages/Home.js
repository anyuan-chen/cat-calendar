import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar";

export default function Home(props) {
  return (
    <div>
      <h1>{props.hello}</h1>
      <Navbar></Navbar>
      <img src={process.env.PUBLIC_URL + "/img/sample.jpeg"} />;
    </div>
  );
}
