import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-grid">
        <div className="left-footer">
          <img src="boulean.png" alt="Boulean Logo" />
          <br />© 2026 Boulean. All rights reserved.
        </div>
        <div className="right-footer">
          <a href="https://www.youtube.com/@bouleandev" target="_blank">
            Check My Youtube -&gt;
          </a>
          <a href="https://discord.com/invite/NdTtThKZ9d" target="_blank">
            Check My Discord -&gt;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
