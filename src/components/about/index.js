import React from "react";
import abimg2 from "../../images/img-1.png";
import "./style.css";
// import { Link } from "react-router-dom";

const About = (props) => {
  // const ClickHandler = () => {
  //   window.scrollTo(10, 0);
  // };
  return (
    <div className="about-style-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-12">
            <div className="about-img">
              <img src={props.AbImg} alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 col-12">
            <div className="about-content">
              <div className="section-title">
                <h2>About Us</h2>
              </div>
              <p>
                Stellar Sound Foundation aims to help everyone rediscover music
                and creativity from their home. We want to connect, empower and
                help independent musicians. We will propagate positive changes
                in the music industry and address well-known problems in the
                music industry.
              </p>
              <p>
                With the encouragement, community, conferences we will create
                more options for musicians that are already in the industry. To
                those not being able to afford, we aim to donate instruments.
                Free education will be provided to those facing depression and
                anxiousness caused by the lockdown. Anyone interested in music
                will have an opportunity to gain something in one of our
                activities. We will try to improve everyone’s life by unlocking
                their creativity.
              </p>
              {/* <div className="btns">
                <div>
                  <Link
                    onClick={ClickHandler}
                    className="theme-btn"
                    to="/about"
                  >
                    More About Us..
                  </Link>
                </div>
              </div> */}
              {/* <div className="signature">
                <img src={abimg2} alt="" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
