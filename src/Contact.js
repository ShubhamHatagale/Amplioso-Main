import React from 'react'
import './About.css'
import Header from './component/Header'
import Sidevideo from './img/video.mp4'
import ReactFullpage from '@fullpage/react-fullpage';
import Wedo from './img/wedo.png'
import Wedo1 from './img/wedo1.png'
import Request from './img/req1.png'
import Ico1 from './img/ico1.png'
import Ico2 from './img/ico2.png'
import Ico3 from './img/ico3.png'
import ContactImg from './img/about2.jpg'
import Footerext from './component/Footerext';
import Testominals from './component/Testominals';
import * as FaIcons from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { FadeInDown, FadeInText, FadeInUp, FadeInImg, FadeInUpBtn, FadeInRight, FadeInLeft, FadeInUpImg, FadeInFullLeft } from './Animation.js'

export default function Contact() {
    return (
        
       <section>

<div className="section">
        <div>
           
            <div className="contact-full-wrapper">
            
            <section className="wrapper-1-contact">
                    {/* <div>
                    <img src={ContactImg} />
                </div> */}
                <div className="contact-img">
                    <FadeInFullLeft>
                    <img src={ContactImg} align="middle" />
                    </FadeInFullLeft>

                    
                </div>
                {/* <div className="contact-title-conatiner3">
                        <h4> 
                        Contact Us
                        </h4>
                        <div className="line">
                            
                        </div>
                        

                        </div> */}
                        <div>
                        
                            </div>
                            <FadeInUpBtn>
                    <div className="how-it-ul-contact">
                        <ul>
                            <li>
                                <div className="contact-svg-container">
                            <FaIcons.FaLocationArrow /> 
                            </div>
                            <div>
                                </div>
                            <div>
                           <p>Address</p><span>
                            Amploso, HQ 24 Fifth st, Los Angeles, USA</span>
                            </div>
                            </li>
                       
                            <li>
                            <div className="contact-svg-container">
                            <FaIcons.FaPhone />
                            </div>
                            <div>
                                </div>
                            <div>
                            <p>Call Us On</p>
                            <span>
                        
                            Phone : +145 (03) 456 0000 <br/> Support : +145 (03) 456 0000
                            </span>
                            </div>
                            </li>
                            <li>
                            <div className="contact-svg-container">
                            <FaIcons.FaEnvelopeOpen />
                            </div>
                            <div>
                                </div>
                            <div>
                                <p>Email Us</p>
                                <span>
                      
                            support@amplioso.com</span>
                            </div>
                            </li>
                        </ul>
                    </div>
                    </FadeInUpBtn>
               

                </section>
                <section className="wrapper-2-contact">
                    <div className="form-div">
                        <FadeInUp>
                       <form>
                           <div>
                               <h4>Get In Touch</h4>
                               <p>Have an inquiry or some feedback for us? <br/> Fill out the form below to contact our team.</p>
                           <div className="input-text-div">
                              
                               <div>
                                   <input type="text" placeholder="Company Name" />
                                   <input type="text" placeholder="Contact Person" />
                                </div>
                                <div>
                                   <input type="text" placeholder="E-mail" />
                                   <input type="text" placeholder="Contact No." />
                                </div>
                                <div>
                                    <textarea placeholder="Message" ></textarea>
                                </div>   
                                </div>
                                {/* <div>
                                    <button>Submit</button>
                                </div> */}
                                <div className="contact-btn--container">
                            <button>Submit</button>
                        </div>
                         
                           </div>
                       </form>
                       </FadeInUp>
                    </div>
                </section>
            </div>
            </div>
            </div>

      
            
            <div>
                <Footerext />
            </div>

            

            
            
            

          

      

            </section> 
       
   

    )

}
