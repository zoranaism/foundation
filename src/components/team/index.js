import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'
import tm1 from '../../images/team/team-1.jpg'
import tm2 from '../../images/team/team-2.jpg'
import tm3 from '../../images/team/team-3.jpg'

const TeamSection = (props) => {

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(
        <section className={`team-section section-padding ${props.teamClas}`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-lg-6">
                        <div className="section-title text-center">
                            <span>Meet Our Team</span>
                            <h2>Our Expert Volunteer</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="team-grids clearfix">
                            <div className="grid">
                                <div className="img-holder">
                                    <img src={tm1} alt="" />
                                </div>
                                <div className="details">
                                    <h3><Link onClick={ClickHandler} to="/volunteer">Devin Robertson</Link></h3>
                                    <p>CEO & Founder</p>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="img-holder">
                                    <img src={tm2} alt="" />
                                </div>
                                <div className="details">
                                    <h3><Link onClick={ClickHandler} to="/volunteer">Rickey Goodman</Link></h3>
                                    <p>Volunteer</p>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="img-holder">
                                    <img src={tm3} alt="" />
                                </div>
                                <div className="details">
                                    <h3><Link onClick={ClickHandler} to="/volunteer">Jean Washington</Link></h3>
                                    <p>Volunteer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamSection;