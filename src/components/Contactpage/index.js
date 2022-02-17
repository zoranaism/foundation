import React from 'react';
import ContactForm from '../ContactFrom'
import './style.css'

const Contactpage = () => {

    return(
        <section className="contact-pg-contact-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-6 col-12">
                        <div className="section-title-s3 section-title-s5">
                            <h2>Our Contacts</h2>
                        </div>
                        <div className="contact-details">
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. </p>
                            <ul>
                                <li>
                                    <div className="icon">
                                        <i className="ti-location-pin"></i>
                                    </div>
                                    <h5>Our Location</h5>
                                    <p>Den Bosch, The Netherlands</p>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="ti-mobile"></i>
                                    </div>
                                    <h5>Phone</h5>
                                    <p>+31684359770</p>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="ti-email"></i>
                                    </div>
                                    <h5>Email</h5>
                                    <p>stellarsoundfoundation@gmail.com</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-6 col-12">
                        <div className="contact-form-area">
                            <div className="section-title-s3 section-title-s5">
                                <h2>Quick Contact Form</h2>
                            </div>
                            <div className="contact-form">
                                <ContactForm/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="contact-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39551.89142989663!2d5.283159105409419!3d51.714866674503384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6ee37ad3edd37%3A0x400de5a8d1e7c50!2s&#39;s-Hertogenbosch%2C%20Netherlands!5e0!3m2!1sen!2srs!4v1645111254144!5m2!1sen!2srs"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     )
        
}

export default Contactpage;
