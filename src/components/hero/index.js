import React, { Component } from "react";
import { Link } from 'react-router-dom'

import './style.css'

class Hero extends Component {
    render() {

        return (
            <section className="hero hero-slider hero-style-1">

                    <div className="slide">
                        <div className="slide-inner" style={{ backgroundImage: `url(${this.props.Hero})` }}>
                            <div className="container">
                                <div className="col col-lg-6 slide-caption">
                                    <div className="slide-title">
                                        <h2>Quality music for <span>Everyone</span></h2>
                                    </div>
                                    <div className="slide-subtitle">
                                        <p>Stellar Sound Foundation is an international foundation <br/> that aims to improve quality and diversity in the music industry.</p>
                                    </div>
                                    <div className="btns">
                                        <Link to="/donate" className="theme-btn">Donate Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        )
    }
}

export default Hero;