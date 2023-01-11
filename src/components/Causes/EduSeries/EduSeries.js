import React from "react";
import { Link } from "react-router-dom";
import causesimg from "../../../images/cause/4.png";
import "../style.css";

export const EduSeries = (props) => {
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
                href="https://discord.gg/k6mE5dk2Gt"
                target="_blank"
                className="theme-btn"
              >
                Join Discord server
              </a>
            </div>
          </div>
        </div>

        <div className="cause-text">
          <h3>
            <Link onClick={ClickHandler} to="/case-single">
              Stellar EDU Series
            </Link>
          </h3>
          <p>
            Stellar EDU Series is series of educative online meetup where
            guests are showcasing a specific topics in the field of making
            music. From music production, promotion, to songwriting and music
            theory, Discord community made of musician-wannabes, will have an
            opportunity to watch, learn and perfect their technical skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EduSeries;
