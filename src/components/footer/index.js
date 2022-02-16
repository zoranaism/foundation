import React from 'react'
import {Link}  from 'react-router-dom'
import Logo from '../../images/logo.png'
import n1 from '../../images/instragram/1.jpg'
import n2 from '../../images/instragram/2.jpg'
import n3 from '../../images/instragram/3.jpg'
import n4 from '../../images/instragram/4.jpg'
import n5 from '../../images/instragram/5.jpg'
import n6 from '../../images/instragram/6.jpg'
import './style.css'

const Footer = (props) =>{

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

  return(
    <footer className="tp-ne-footer">
        <div className="tp-site-footer">
            <div className="tp-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <img src={Logo} alt="" />
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem rem tempore vel!</p>
                                <ul>
                                    <li>
                                        <div className="parallax-wrap">
                                            <div className="parallax-element">
                                                <Link onClick={ClickHandler} to="/">
                                                    <i className="ti-facebook"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="parallax-wrap">
                                            <div className="parallax-element">
                                                <Link onClick={ClickHandler} to="/">
                                                    <i className="ti-instagram"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Useful Links</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/about">About Us</Link></li>
                                    <li><Link onClick={ClickHandler} to="/case">Activities</Link></li>
                                    <li><Link onClick={ClickHandler} to="/donate">Donate</Link></li>
                                    <li><Link onClick={ClickHandler} to="/contact">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 offset-lg-1 col-md-6 col-sm-12 col-12">
                            <div className="widget market-widget tp-service-link-widget">
                                <div className="widget-title">
                                    <h3>Contact </h3>
                                </div>
                                <p>Lorem ipsum dolor amet opet den-bumb</p>
                                <div className="contact-ft">
                                    <ul>
                                        <li><i className="fi flaticon-pin"></i>Den Bosch, The Netherlands</li>
                                        <li><i className="fi flaticon-call"></i>+31684359770</li>
                                        <li><i className="fi flaticon-envelope"></i>Sadakat@gmail.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget instagram">
                                <div className="widget-title">
                                    <h3>Instagram</h3>
                                </div>
                                <ul className="d-flex">
                                    <li><Link onClick={ClickHandler} to="/"><img src={n1} alt="ins"/></Link></li>
                                    <li><Link onClick={ClickHandler} to="/"><img src={n2} alt="ins"/></Link></li>
                                    <li><Link onClick={ClickHandler} to="/"><img src={n3} alt="ins"/></Link></li>
                                    <li><Link onClick={ClickHandler} to="/"><img src={n4} alt="ins"/></Link></li>
                                    <li><Link onClick={ClickHandler} to="/"><img src={n5} alt="ins"/></Link></li>
                                    <li><Link onClick={ClickHandler} to="/"><img src={n6} alt="ins"/></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tp-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright">&copy; 2021 Sadakat. All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
} 

export default Footer;