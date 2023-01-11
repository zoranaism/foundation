import React from "react";
import { Link } from "react-router-dom";
import causesimg from "../../../images/cause/1.png";
import "../style.css";

export const SSPCause = (props) => {
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
                href="https://www.stellarsoundpodcast.com/"
                target="_blank"
                className="theme-btn"
              >
                Find out more
              </a>
            </div>
          </div>
        </div>
        <div className="cause-text">
          <h3>
            <Link to="/case-single">Stellar Sound Podcast</Link>
          </h3>
          <p>
            The Stellar Sound Podcast in interviewing ground-breaking musicians
            from all over the world. With the rubrics like "Galactic trinity"
            and 'Meteor shower', the guests are uncovering their ways of
            becoming musicians today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SSPCause;
