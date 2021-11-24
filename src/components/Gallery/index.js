import React, { Component } from 'react';
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'
import Gallery_1 from '../../images/gallery/img-1.jpg';
import Gallery_2 from '../../images/gallery/img-2.jpg';
import Gallery_3 from '../../images/gallery/img-3.jpg';
import Gallery_4 from '../../images/gallery/img-4.jpg';
import Gallery_5 from '../../images/gallery/img-5.jpg';
import Gallery_6 from '../../images/gallery/img-6.jpg';
import {Link} from 'react-router-dom'
import './style.css'

class Gallery extends Component {

    state = {
        Child: false,
        Charity: false,
        Volunteering: false,
        Sponsorship: false,
        isOpen : false,
    }

    render() {

        const allElement = event => {
            event.preventDefault();
            this.setState({
                Volunteering: true,
                Charity: true,
                Child: true,
                Sponsorship: true,
            });
        }

        const webDesign = event => {
            event.preventDefault();
            this.setState({
                Child: true,
                Charity: false,
                Volunteering: false,
                Sponsorship: false,
                isOpen: true,
            });
        }

        const printDesign = event => {
            event.preventDefault();
            this.setState({
                Charity: true,
                Child: false,
                Volunteering: false,
                Sponsorship: false,
                isOpen: true,
            });
        }

        const webApp = event => {
            event.preventDefault();
            this.setState({
                Volunteering: true,
                Charity: false,
                Child: false,
                Sponsorship: false,
                isOpen: true,
            });
        }

        const Photography = event => {
            event.preventDefault();
            this.setState({
                Sponsorship: true,
                Volunteering: false,
                Charity: false,
                Child: false,
                isOpen: true,
            });
        }

        const ClickHandler = () =>{
            window.scrollTo(10, 0);
         }


        return (
            <section id="protfolio" className="gallery-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12 sortable-gallery">
                            <div className="gallery-filters">
                                <div className="section-title">
                                    <h2>Our Gallery</h2>
                                </div>
                                <ul>
                                    <li><Link data-filter="*" to="/" className="current" onClick={allElement}>All</Link></li>
                                    <li><Link data-filter=".Web-Design" to="/" onClick={webDesign}>Child</Link></li>
                                    <li><Link data-filter=".Print-Design" to="/" onClick={printDesign}>Charity</Link></li>
                                    <li><Link data-filter=".Web-Application" to="/" onClick={webApp}>Volunteering</Link></li>               
                                    <li><Link data-filter=".Photography" to="/" onClick={Photography}>Sponsorship</Link></li> 
                                </ul>
                            </div>
                            <div className="gallery-container gallery-fancybox masonry-gallery payra-masonary">
                               
                                <div className={this.state.Charity ? "grid active" : "grid"
                                    && this.state.Volunteering ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"
                                    }>
                                    <ReactFancyBox
                                        thumbnail={Gallery_1}
                                        image={Gallery_1}/>
                                    <div className="icon">
                                        <Link onClick={ClickHandler} to="/gallery" className="view-icon">
                                            <i className="ti-plus" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className={this.state.Child ? "grid active" : "grid" 
                                    && this.state.Charity ? "grid active" : "grid"
                                    && this.state.Volunteering ? "grid active" : "grid"
                                    && this.state.Sponsorship ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                        
                                    <img src={Gallery_2} alt="" className="img img-responsive"/>
                                    <div className="icon">
                                        <Link onClick={ClickHandler} to="/gallery" className="view-icon">
                                          <i className="ti-plus" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className={this.state.Child ? "grid active" : "grid"
                                    && this.state.Volunteering ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    
                                    <img src={Gallery_6} alt="" className="img img-responsive"/>
                                    <div className="icon">
                                        <Link onClick={ClickHandler} to="/gallery" className="view-icon">
                                            <i className="ti-plus" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className={this.state.Charity ? "grid active" : "grid"
                                    && this.state.Sponsorship ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    <img src={Gallery_5} alt="" className="img img-responsive"/>
                                    <div className="icon">
                                        <Link onClick={ClickHandler} to="/gallery" className="view-icon">
                                            <i className="ti-plus" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className={this.state.Charity ? "grid active" : "grid"
                                    && this.state.Sponsorship ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    
                                    <img src={Gallery_3} alt="" className="img img-responsive"/>
                                    <div className="icon">
                                        <Link onClick={ClickHandler} to="/gallery" className="view-icon">
                                            <i className="ti-plus" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className={this.state.Charity ? "grid active" : "grid"
                                    && this.state.Volunteering ? "grid active" : "grid"
                                    && this.state.Sponsorship ? "grid active" : "grid"
                                    && this.state.isOpen ? "grid" : "grid open"}>
                                    <img src={Gallery_4} alt="" className="img img-responsive"/>
                                    <div className="icon">
                                        <Link onClick={ClickHandler} to="/gallery" className="view-icon">
                                             <i className="ti-plus" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Gallery;