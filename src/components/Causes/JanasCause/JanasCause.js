import React from "react";
import { Link } from "react-router-dom";
import causesimg from "../../../images/cause/3.png";
import "../style.css";

export const JanasCause = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  return (
    <div className="col-xl-4 col-lg-6 col-12">
      <div className="cause-item">
        <div className="cause-top">
          <div className="cause-img">
            <img src={causesimg} alt="" />
            <div className="case-btn">
              <a
                href="https://paypal.me/stellarsoundpodcast"
                target="_blank"
                className="theme-btn"
              >
                Donate now
              </a>
            </div>
          </div>
        </div>

        <div className="cause-text">
          <ul>
            <li>
              <Link onClick={ClickHandler} to="/">
                GOAL : €3080
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} to="/">
                RISED : $876
              </Link>
            </li>
          </ul>
          <h3>
            <Link onClick={ClickHandler} to="/case-single">
              Help Jana Beat Lyme
            </Link>
          </h3>
          <p>
            Being part of the Stellar Team and phenomenal singer and violinist,
            Jana found out about late stage Lyme disease. Our team agreed to
            make an exception and create a charitable set of events to help our
            friend we appreciate and care for.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JanasCause;
