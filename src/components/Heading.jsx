import React from "react";
import "./Heading.css";
import TwitchClip from "./TwitchClip";
import Slider from "./Slider";
const Heading = () => {
  return (
    <div id="maincontent">
      <section className="hero">
        <div className="heading-wrapper">
          <h1 className="main-heading">Where Dad Jokes Meet Chaos!</h1>
        </div>
        <TwitchClip className="TwitchClip" />
        <p className="sub-text">
          Welcome to this fan website. Here you'll find links to boulean games,
          links to his social media, some information about boulean, and
          whatever else new he decide to put on here. For now, It will be kept
          pretty simple though.
        </p>
        <div className="slider-container">
          <Slider />
        </div>
      </section>
    </div>
  );
};

export default Heading;
