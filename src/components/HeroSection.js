import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video src="/videos/video-1.mp4" autoPlay loop muted /> */}
      <h1>SARAH ROSSY</h1>
      <div>
        <p>• interdisciplinary artist • educator • web developer •</p>
      </div>
      <div className="hero-btns">
        <Link to="/art">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            art
          </Button>
        </Link>
        <Link to="/dev">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            dev
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
