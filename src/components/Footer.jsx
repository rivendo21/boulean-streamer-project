import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-grid">
        <div className="left-footer">
          <img src="boulean.png" alt="Boulean Logo" />
          <br />© 2025 Boulean. All rights reserved.
        </div>
        <div className="right-footer">
          <a href="https://github.com/boulean">GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
