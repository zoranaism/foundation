import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const CtaSection = (props) => {
  return (
    <div className="tp-cta-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-cta-text">
              <h2>Become part of the Stellar Story</h2>
              <p>
                We are an international team of talented and passionate young
                volunteers working for this cause online. As a group of
                musicians and music enthusiasts, we are channeling strong
                passion through our work and having fun in the process.
              </p>
              <div className="btns">
                <a
                  href="https://paypal.me/stellarsoundpodcast"
                  target="_blank"
                  className="theme-btn"
                >
                  Donate Now
                </a>
                <a
                  href="https://www.stellarsoundpodcast.com/become-a-volunteer"
                  target="_blank"
                  className="theme-btn-s2"
                >
                  Join Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
