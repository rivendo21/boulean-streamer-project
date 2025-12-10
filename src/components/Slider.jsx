import React, { useState, useEffect } from "react";
import "./Slider.css";

const companies = [
  "itch.png",
  "bluesky.png",
  "twitch.png",
  "discord.png",
  "youtube.png",
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % companies.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-wrapper">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
      >
        {companies.concat(companies).map((logo, i) => (
          <div className="slider-item" key={i}>
            <img src={logo} alt={`Company ${i}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
