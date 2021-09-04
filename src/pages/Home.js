import React from "react";
import "./Home.css";
export default function Home(props) {
  return (
    <div>
      <h1>{props.hello}</h1>
      <img src={process.env.PUBLIC_URL + "/img/homepage.jpeg"} />;
    </div>
  );
}
