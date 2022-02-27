import React from 'react'
import emailjs from 'emailjs-com'

import TeamSection from '../team'
import './style.css'

import vimg from '../../images/Volunteers.jpg'

const SubmitHandler = (e) =>{
    e.preventDefault()

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');

    emailjs.sendForm(
        'service_s5yzsk9',
        'template_q2hv6nk',
        e.target,
        'user_GpO6McyoqejX9NUtKRbtt'
        ).then(res=>{
            if(res.status){
                alert("Your message was sent successfully")
                name.value = '';
                email.value = '';
                subject.value = '';
                message.value = '';
            }
            else{
                alert("Something went wrong try again")
            }
        }).catch(err=>{
            console.log(err);
    });
}


const Volunteer = () =>  {

    return(
        <div className="volunteer-page">
            <div className="volunteer-area section-padding">
                <div className="volunteer-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="volunteer-item">
                                    <div className="volunteer-img-wrap">
                                        <div className="volunter-img">
                                            <img src={vimg} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="volunteer-contact">
                                    <div className="volunteer-contact-form">
                                        <form onSubmit={SubmitHandler} className="contact-validation-active" id="contact-form">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                    <input type="text" className="form-control" name='name' id="name" placeholder="First Name"/>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group clearfix">
                                                    <input type="email" className="form-control" name="email" id="email" placeholder="Email"/>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject"/>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group form-group-in">
                                                    <label htmlFor="file">Upload Your CV</label>
                                                    <input id="file" type="file" className="form-control" name="file"/>
                                                    <i className="ti-cloud-up"></i>
                                                </div>
                                                <div className="col-lg-12 col-12 form-group">
                                                    <textarea className="form-control" name="message" id="message" placeholder="Case Description..."></textarea>
                                                </div>
                                                <div className="submit-area col-lg-12 col-12">
                                                    <button type="submit" className="theme-btn submit-btn">Send Message</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TeamSection teamClas={'v2'}/>
        </div>
    )
    
}
   

    
    export default Volunteer;
          
          
          
          
