import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

const TwitchClip = ({ className }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [autoplay, setAutoplay] = useState(false);

  // When clip scrolls into view, enable autoplay
  if (inView && !autoplay) setAutoplay(true);

  const clipId = "AlertSpicyCheetahBibleThump-QNFl_7mfOOHyUB3V";
  const startTime = "0h0m45s"; // 45th second
  const parentDomain = "localhost"; // change to your domain in production

  const src = `https://clips.twitch.tv/embed?clip=${clipId}&parent=${parentDomain}&t=${startTime}&autoplay=${autoplay}&muted=true`;

  return (
    <div
      className={className}
      ref={ref}
      style={{
        width: "900px", // desired width
        maxWidth: "90%", // responsive on smaller screens
        height: "340px", // adjust for aspect ratio
        marginTop: "-250px", // pull it over heading wrapper
        zIndex: 100,
        position: "relative",
      }}
    >
      <iframe
        src={src}
        height="100%"
        width="80%"
        frameBorder="0"
        allowFullScreen
        scrolling="no"
        title="Twitch Clip"
      ></iframe>
    </div>
  );
};

export default TwitchClip;
