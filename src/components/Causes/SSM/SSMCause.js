import React from "react";
import { Link } from "react-router-dom";
import causesimg from "../../../images/cause/2.png";
import "../style.css";

export const SSMCause = (props) => {
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
                href="https://stellarsoundmagazine.wordpress.com/"
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
            <Link onClick={ClickHandler} to="/case-single">
              Stellar Sound Magazine
            </Link>
          </h3>
          <p>
            Stellar Sound Magazine site is best known for its daily output of
            music reviews. Staying true to the vision, the magazine is
            highlighting the most creative musicians from the past and today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SSMCause;
