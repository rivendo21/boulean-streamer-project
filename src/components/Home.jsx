import React from "react";
import "./Home.css";
import ContactForm from "./ContactForm";

const Home = () => {
  return (
    <div className="home-container">
      <div className="twitch-flex-container">
        <p>
          Wanna Know More About Me? Say Less{" "}
          <img
            src="https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_b95c3d67a0524e9283b10c6d0a2097c2/default/dark/3.0"
            width={70}
          />
        </p>
        <a href="https://www.twitch.tv/boulean">
          <button className="twitch-energy-btn">
            I stream Come Say Hi! on Twitch{" "}
          </button>
        </a>
      </div>
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
        <div className="tiers-container">
          <div className="tier">
            <p>Tier 1</p>
            <p>
              Join me as I take the plunge! I'm a hobbyist, super newb, game
              developer with high hopes of turning this into a full-time career.
              I'm documenting my journey from (almost) the very beginning in
              hopes of encouraging other people to "just go for it!" It'll be
              fine... :D
            </p>
            <h3>What you will get:</h3>
            <ul>
              <li>Emotes</li>
              <li>Role in Discord</li>
              <li>Sub-badge to flex in chat</li>
            </ul>
            <img src="emotes.png" />
            <p>Price: 5.99$</p>
            <button className="bronze-btn">Subscribe</button>
          </div>
          <div className="tier">
            <p>Tier 2</p>
            <p>
              Support a little extra to help the stream grow and getting some
              more rewards as a thank you
            </p>
            <h3>What you will get:</h3>
            <ul>
              <li>Role in Discord</li>
              <li>Sub-badge to flex in chat</li>
              <li>Emotes</li>
              <li>exclusive tier2 emotes</li>
            </ul>
            <img src="emotes.png" />
            <p>Price: 9.99$</p>
            <button className="silver-btn">Subscribe</button>
          </div>
          <div className="tier">
            <p>Tier 3</p>
            <p>
              Go way above the call of duty and get some extra special rewards
              for supporting the stream
            </p>
            <h3>What you will get:</h3>
            <ul>
              <li>Role in Discord</li>
              <li>Sub-badge to flex in chat</li>
              <li>Emotes</li>
              <li>exclusive tier2 emotes</li>
              <li>exclusive tier3 emotes</li>
            </ul>
            <img src="emotes.png" />
            <p>Price: 25.99$</p>
            <button className="gold-btn">Subscribe</button>
          </div>
        </div>
      </section>
      <section id="contact">
        <h1 className="sup-text">Contacts</h1>
        <ContactForm />
      </section>
    </div>
  );
};

export default Home;
