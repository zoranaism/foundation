import React from 'react';
import './style.css'


const Newsletter = (props) => {
    const submitHandler = (e) => {
        e.preventDefault()
    }

    return(
        <section className={`news-letter-section ${props.NewsClass}`}>
            <div className="container">
                <div className="news-letter-wrap">
                    <div className="row justify-content-center">
                        <div className="col col-lg-10 col-md-8">
                            <div className="newsletter">
                                <h3>Subscribe our Newsletter</h3>
                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.</p>
                                <div className="newsletter-form">
                                    <form onSubmit={submitHandler}>
                                        <div>
                                            <input type="text" placeholder="Enter Your Email" className="form-control"/>
                                            <button className="bigCursor" type="submit">Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     )
        
}

export default Newsletter;
