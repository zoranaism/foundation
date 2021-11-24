import React from 'react'
import {Link} from 'react-router-dom'
import VideoModal from  '../ModalVideo'
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
                            <VideoModal/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-12">
                        <div className="about-content">
                            <div className="section-title">
                                <h2>About Us</h2>
                            </div>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at ,sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum</p>
                            <p> and going through the cites of the word in classNameical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum,Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                            <div className="btns">
                                <div><Link  onClick={ClickHandler} className="theme-btn" to="/about">More About Us..</Link></div>
                            </div>
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