import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="home-container">
      <p>
        Wanna know more about me? say less{" "}
        <img
          src="https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_b95c3d67a0524e9283b10c6d0a2097c2/default/dark/3.0"
          width={70}
        />
      </p>
      <a href="https://www.twitch.tv/boulean">
        <button>I stream Come Say Hi! on Twitch </button>
      </a>
    </div>
  );
};

export default Home;
