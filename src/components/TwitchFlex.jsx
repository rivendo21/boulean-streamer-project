import React from "react";
import { motion } from "framer-motion";
import "./TwitchFlex.css";
const TwitchFlex = () => {
  return (
    <motion.div
      className="twitch-flex-container"
      initial={{ opacity: 0, y: 50 }} // start hidden and below
      whileInView={{ opacity: 1, y: 0 }} // animate into place when visible
      viewport={{ once: false, amount: 0.5 }} // trigger every time 50% visible
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <p>
        Wanna Know More About Me? Say Less{" "}
        <img
          src="https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_b95c3d67a0524e9283b10c6d0a2097c2/default/dark/3.0"
          width={70}
        />
      </p>
      <a href="https://www.twitch.tv/boulean">
        <button className="twitch-energy-btn">
          I stream Come Say Hi! on Twitch
        </button>
      </a>
    </motion.div>
  );
};

export default TwitchFlex;
