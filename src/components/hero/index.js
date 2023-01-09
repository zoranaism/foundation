import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./style.css";

class Hero extends Component {
  render() {
    return (
      <section className="hero hero-slider hero-style-1">
        <div className="slide">
          <div
            className="slide-inner"
            style={{ backgroundImage: `url(${this.props.Hero})` }}
          >
            <div className="container">
              <div className="col col-lg-6 slide-caption">
                <div className="slide-title">
                  <h2>
                    Empowering creative <span>Musicians</span>
                  </h2>
                </div>
                <div className="slide-subtitle">
                  <p>
                    Stellar Sound Foundation is an international non-government
                    organization that aims to improve quality and diversity in
                    the music industry.
                  </p>
                </div>
                <div className="btns">
                  <a
                    href="https://paypal.me/stellarsoundpodcast"
                    target="_blank"
                    className="theme-btn"
                  >
                    Donate Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
