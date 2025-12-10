import React from "react";
import "./Home.css";
import ContactForm from "./ContactForm";
import TwitchFlex from "./TwitchFlex";
import Tiers from "./Tiers";

const Home = () => {
  return (
    <div className="home-container">
      <TwitchFlex />
      <div id="Games">
        <div className="games-wrapper">
          <div className="games-content">
            Games
            <div className="return">
              Return of pluto -&gt;{" "}
              <a>
                <button className="gamer-btn">Play on itch</button>
              </a>
            </div>
            <div className="return-margin">Beardlean -&gt; Coming soon </div>
          </div>
        </div>
      </div>
      <section id="support">
        <h1 className="sup-text">Supporters</h1>

        <Tiers />
      </section>
      <section id="contact">
        <h1 className="sup-text">Contacts</h1>
        <ContactForm />
      </section>
    </div>
  );
};

export default Home;
