import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home(props) {
  return (
    <div id="um">
      <Navbar></Navbar>
        <img id="kitty" src={process.env.PUBLIC_URL + "/img/homepage.jpeg"} alt="oops!"/>
      <Footer></Footer>
    </div>
  );
}
