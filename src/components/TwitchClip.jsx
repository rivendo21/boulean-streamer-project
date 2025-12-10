import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

const TwitchClip = ({ className }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [autoplay, setAutoplay] = useState(false);

  // Enable autoplay when the clip scrolls into view
  if (inView && !autoplay) setAutoplay(true);

  const clipId = "AlertSpicyCheetahBibleThump-QNFl_7mfOOHyUB3V";
  const startTime = "0h0m45s"; // start at 45th second

  // ====== INSERT YOUR DOMAINS HERE ======
  // Add every domain where this embed will run
  const parentDomains = [
    "localhost", // for local dev
    "boulean-streamer-project.vercel.app", // replace with your Vercel domain
    "yourcustomdomain.com", // replace if you have a custom domain
  ];

  const parentParams = parentDomains
    .map((domain) => `parent=${domain}`)
    .join("&");

  const src = `https://clips.twitch.tv/embed?clip=${clipId}&${parentParams}&t=${startTime}&autoplay=${autoplay}&muted=true`;

  return (
    <div
      className={className}
      ref={ref}
      style={{
        width: "900px",
        maxWidth: "90%",
        height: "500px",
        marginTop: "5px",
        zIndex: 100,
        position: "relative",
      }}
    >
      <iframe
        src={src}
        height="100%"
        width="100%"
        frameBorder="0"
        allowFullScreen
        scrolling="no"
        title="Twitch Clip"
      ></iframe>
    </div>
  );
};

export default TwitchClip;
