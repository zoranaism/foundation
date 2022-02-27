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
                                        <iframe width="500" height="300" src="https://c32e306d.sibforms.com/serve/MUIEAA1s4EU_dLgfcZhrrpz0MssFIhVA7LShGqTSdB7eyS45tpTbA_ua48Whto9tfS5EFMS20de4LWUrCZMIuxDXpp5sQr5hlVXlTgZKNFFRW0MBcbTijJ6o78Wk91jwscRSPGywfXbZ8usI0XRGo65VnFwTNthEZORBXQSWKaDzui_vJca9NP4Bqh-1iFGHAazO9i8vA9yIZ6Km" frameborder="0" scrolling="auto" allowfullscreen ></iframe>
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
