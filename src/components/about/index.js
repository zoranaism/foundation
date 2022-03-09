import React from 'react'
import abimg2 from '../../images/img-1.png'
import './style.css'

const About = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className="about-style-2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12 col-12">
                        <div className="about-img">
                            <img src={props.AbImg} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-12">
                        <div className="about-content">
                            <div className="section-title">
                                <h2>About Us</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio quos cupiditate pariatur reiciendis accusamus ipsum! Doloremque error, rerum dolorem inventore dicta magni ratione, repellendus corporis repellat ut modi fugit ipsa minus fugiat numquam accusantium est esse aspernatur, odit tempore consequuntur odio nesciunt ipsam eaque! Excepturi harum voluptatum quisquam non aliquam!</p>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque temporibus ab eaque nulla error perferendis id doloremque voluptatum totam. Officiis pariatur rerum sit unde sequi eius consequuntur expedita voluptate! Maiores quidem ullam ratione quae illo?</p>
                            {/* <div className="btns">
                                <div><Link  onClick={ClickHandler} className="theme-btn" to="/about">More About Us..</Link></div>
                            </div> */}
                            <div className="signature">
                                <img src={abimg2} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;