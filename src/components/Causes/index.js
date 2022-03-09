import React from 'react'
import {Link} from 'react-router-dom'
import causesimg from '../../images/cause/img-1.png'
import causesimg2 from '../../images/cause/img-2.jpg'
import './style.css'

const Causes = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className="case-area section-padding">
            <div className="container">
                <div className="col-lg-6 offset-lg-3">
                    <div className="section-title text-center">
                        <div className="thumb-text">
                            <span>CAUSES</span>
                        </div>
                        <h2>Latest Caused of Sadakat.</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-12">
                        <div className="cause-item">
                            <div className="cause-top">
                                <div className="cause-img">
                                    <img src={causesimg} alt="" />
                                    <div className="case-btn">
                                        <Link onClick={ClickHandler} to="/donate" className="theme-btn">Donate Now<i className="fa fa-angle-double-right" aria-hidden="true"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="cause-text">
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/">GOAL : $9860</Link></li>
                                    <li><Link onClick={ClickHandler} to="/">RISED : $768</Link></li>
                                </ul>
                                <h3><Link onClick={ClickHandler} to="/case-single">Lorem ipsum dolor sit amet.</Link></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero minima nostrum voluptatem a?.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-12">
                        <div className="cause-item">
                            <div className="cause-top">
                                <div className="cause-img">
                                    <img src={causesimg2} alt="" />
                                    <div className="case-btn">
                                        <Link onClick={ClickHandler} to="/donate" className="theme-btn">Donate Now<i className="fa fa-angle-double-right" aria-hidden="true"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="cause-text">
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/">GOAL : $9860</Link></li>
                                    <li><Link onClick={ClickHandler} to="/">RISED : $768</Link></li>
                                </ul>
                                <h3><Link onClick={ClickHandler} to="/case-single">Lorem ipsum dolor sit.</Link></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae omnis tempore veritatis..</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Causes;