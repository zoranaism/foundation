import React from "react";
import { SSPCause } from "./SSP/SSPCause";
import { SSMCause } from "./SSM/SSMCause";
import { JanasCause } from "./JanasCause/JanasCause";
import { EduSeries } from "./EduSeries/EduSeries";
import "./style.css";

const Causes = (props) => {
  return (
    <div className="case-area section-padding">
      <div className="container">
        <div className="col-lg-6 offset-lg-3">
          <div className="section-title text-center">
            <div className="thumb-text">
              <span>PROJECTS</span>
            </div>
            <h2>Stellar Sound Foundation Projects</h2>
          </div>
        </div>
        <div className="row">
          <SSPCause />
          <SSMCause />
          <JanasCause />
          <EduSeries />
        </div>
      </div>
    </div>
  );
};

export default Causes;
