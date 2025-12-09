import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="home-container">
      <p>
        Wanna Know More About Me? Say Less{" "}
        <img
          src="https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_b95c3d67a0524e9283b10c6d0a2097c2/default/dark/3.0"
          width={70}
        />
      </p>
      <a href="https://www.twitch.tv/boulean">
        <button>I stream Come Say Hi! on Twitch </button>
      </a>
      <div className="Games">
        Games
        <div className="return">
          Return of pluto -&gt;{" "}
          <a>
            <button>Play on itch</button>
          </a>
        </div>
        <div className="return">
          Beardlean -&gt; <button>Play on itch</button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Home;
