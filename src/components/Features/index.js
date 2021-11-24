import React from 'react'
import './style.css'

const Features = (props) => {

    return(
        <div className={`features-area ${props.Features}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="features-item-2">
                            <div className="features-icon">
                                <i className="fi flaticon-salad"></i>
                            </div>
                            <div className="features-content">
                                <p>Health For</p>
                                <h3>Healthy Food</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="features-item-2">
                            <div className="features-icon">
                                <i className="fi flaticon-school"></i>
                            </div>
                            <div className="features-content">
                                <p>Get Free</p>
                                <h3>Pure Education</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="features-item-2">
                            <div className="features-icon">
                                <i className="fi flaticon-medicine"></i>
                            </div>
                            <div className="features-content">
                                <p>Get Free</p>
                                <h3>Medical Facilities</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;