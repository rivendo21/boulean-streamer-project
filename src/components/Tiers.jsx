import React from "react";
import { motion } from "framer-motion";
import "./Tiers.css";

const Tiers = () => {
  return (
    <div className="tiers-container">
      {/* Tier 1: slide from left with bounce */}
      <motion.div
        className="tier"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: [0, -10, 0] }} // slight left-right bounce
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <p>Tier 1</p>
        <p>
          Join me as I take the plunge! I'm a hobbyist, super newb, game
          developer with high hopes of turning this into a full-time career...
        </p>
        <h3>What you will get:</h3>
        <ul>
          <li>Emotes</li>
          <li>Role in Discord</li>
          <li>Sub-badge to flex in chat</li>
        </ul>
        <img src="emotes.png" alt="emotes" />
        <p>Price: 5.99$</p>
        <button className="bronze-btn">Subscribe</button>
      </motion.div>

      {/* Tier 2: slide from bottom with bounce */}
      <motion.div
        className="tier"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: [0, -10, 0] }} // slight up-down bounce
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }} // stagger
      >
        <p>Tier 2</p>
        <p>
          Support a little extra to help the stream grow and getting some more
          rewards as a thank you
        </p>
        <h3>What you will get:</h3>
        <ul>
          <li>Role in Discord</li>
          <li>Sub-badge to flex in chat</li>
          <li>Emotes</li>
          <li>exclusive tier2 emotes</li>
        </ul>
        <img src="emotes.png" alt="emotes" />
        <p>Price: 9.99$</p>
        <button className="silver-btn">Subscribe</button>
      </motion.div>

      {/* Tier 3: slide from right with bounce */}
      <motion.div
        className="tier"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: [0, 10, 0] }} // slight right-left bounce
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }} // stagger
      >
        <p>Tier 3</p>
        <p>
          Go way above the call of duty and get some extra special rewards for
          supporting the stream
        </p>
        <h3>What you will get:</h3>
        <ul>
          <li>Role in Discord</li>
          <li>Sub-badge to flex in chat</li>
          <li>Emotes</li>
          <li>exclusive tier2 emotes</li>
          <li>exclusive tier3 emotes</li>
        </ul>
        <img src="emotes.png" alt="emotes" />
        <p>Price: 25.99$</p>
        <button className="gold-btn">Subscribe</button>
      </motion.div>
    </div>
  );
};

export default Tiers;
