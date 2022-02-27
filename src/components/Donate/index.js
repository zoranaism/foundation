import React from 'react'

import pmt1 from '../../images/checkout/img-1.png'
import pmt2 from '../../images/checkout/img-2.png'
import pmt3 from '../../images/checkout/img-3.png'
import pmt4 from '../../images/checkout/img-4.png'

import './style.css'

const Donate = (props) => {

    const SubmitHandler = (e) =>{
        e.preventDefault()
    }

    return(
        <div className="tp-donation-page-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="tp-donate-header">
                            <h2>Make a Donation</h2>
                        </div>
                        <div id="Donations">
                            <p>Pay via our Stellar PayPal any amount.</p>
                            <div className="donateButtons">

                                <div className="donate-button">
                                    <form action="https://www.paypal.com/donate" method="post" target="_top">
                                        <input
                                        type="hidden"
                                        name="hosted_button_id"
                                        value="UVZZNQB5PJXT2"
                                        />
                                        
                                        <button>100$</button>
                                    </form>
                                </div>

                                <div className="donate-button">
                                    <form action="https://www.paypal.com/donate" method="post" target="_top">
                                        <input
                                        type="hidden"
                                        name="hosted_button_id"
                                        value="KUDZVMF5JEW4G"
                                        />
                                        
                                        <button>25$</button>
                                    </form>
                                </div>

                                <div className="donate-button">
                                    <form action="https://www.paypal.com/donate" method="post" target="_top">
                                        <input 
                                        type="hidden"
                                        name="hosted_button_id"
                                        value="84UQ6FAZG3NQC"/>
                                        
                                        <button>10$</button>
                                    </form>
                                </div>

                                <div className="donate-button">
                                    <form action="https://www.paypal.com/donate" method="post" target="_top">
                                        <input 
                                        type="hidden" 
                                        name="hosted_button_id" 
                                        value="5WXZGHKE4PQ7J"/>

                                        <button>5$</button>
                                    </form>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Donate;