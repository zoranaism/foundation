import React from "react";
import { Link } from "react-router-dom";
import causesimg from "../../images/cause/img-1.png";
import causesimg2 from "../../images/cause/img-2.jpg";
import { SingleCause } from './SingleCause'
import "./style.css";

const Causes = (props) => {
  return (
    <div className="case-area section-padding">
      <div className="container">
        <div className="col-lg-6 offset-lg-3">
          <div className="section-title text-center">
            <div className="thumb-text">
              <span>CAUSES</span>
            </div>
            <h2>Latest Caused of Stellar Sound Foundation</h2>
          </div>
        </div>
        <div className="row">
          <SingleCause />
          <SingleCause />
          <SingleCause />
          <SingleCause />
          <SingleCause />
          <SingleCause />
        </div>
      </div>
    </div>
  );
};

export default Causes;
