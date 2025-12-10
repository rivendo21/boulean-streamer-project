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
          <h2>Games</h2>
          <div className="return">
            Return of Pluto -&gt;
            <a
              href="https://boulean.itch.io/the-return-of-pluto"
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp; &nbsp;
              <button className="gamer-btn">Play on itch</button>
            </a>
          </div>
          <div className="return-margin">Beardlean -&gt; Coming soon</div>
        </div>
      </div>
      <section id="support">
        <h1 className="sup-text">Supporters</h1>

        <Tiers />
      </section>
      <section id="contact">
        <h1 className="sup-text">Contacts</h1>
        <ContactForm />
        <p className="contact-text">
          If you want to have E-mails about my next merch -&gt; please submit
          your E-mail to be the first to get notified for the early bird deals{" "}
        </p>
      </section>
    </div>
  );
};

export default Home;
