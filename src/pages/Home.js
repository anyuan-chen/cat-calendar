import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home(props) {
  return (
    <div>
      <Navbar></Navbar>
      <img src={process.env.PUBLIC_URL + "/img/homepage.jpeg"} />
      <Footer></Footer>
    </div>
  );
}
