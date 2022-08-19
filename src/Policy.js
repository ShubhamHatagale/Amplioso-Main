import React from 'react'
import './About.css'
import Header from './component/Header'
import Sidevideo from './img/video.mp4'
import ReactFullpage from '@fullpage/react-fullpage';
import Wedo from './img/wedo.png'
import Wedo1 from './img/wedo1.png'
import Request from './img/req1.png'
import Ico4 from './img/ico4.png'
import Ico5 from './img/ico5.png'
import Ico6 from './img/ico6.png'
import Ico7 from './img/ico9.png'
import Ico8 from './img/ico10.png'
import Ico9 from './img/ico11.png'
import AboutImg from './img/about.jpg'
import Footerext from './component/Footerext';
import Testominals from './component/Testominals';
import * as FaIcons from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { FadeInDown, FadeInText, FadeInUp, FadeInImg, FadeInUpBtn, FadeInRight, FadeInLeft, FadeInUpImg, FadeInFullLeft } from './Animation.js'
import { gsap } from 'gsap';

export default function Policy() {
    return (
        
       <section>

<div className="section">
        <div>
           
            <div className="pricing-wrapper">
            <section className="wrapper-1-pricing">
                <div className="pricing-title-conatiner3">
                    <FadeInText>
                        <h4> 
                        Privacy Policy 
                        </h4>
                      </FadeInText>
                        <div className="line2">
                            
                            
                        </div>

                        </div>
                    {/* <div className="how-it-ul">
                        <ul>
                            <li>
                            <FaIcons.FaLocationArrow /> <span>Address</span>
                            <br/>
                            Amploso, HQ 24 Fifth st, Los Angeles, USA
                            </li>

                            <li>
                            <FaIcons.FaPhone /><span>Call Us On</span>
                            <br/>
                            Phone : +145 (03) 456 0000 <br/> Support : +145 (03) 456 0000</li>
                            <li>
                            <FaIcons.FaVoicemail /><span>Email Us</span>
                            <br/>
                            support@amplioso.com</li>
                        </ul>
                    </div> */}
               

                </section>
                <section className="wrapper-2-pricing">
                    <div className="price-div">
                       <section>
                           <div className="over-flow-price">
                               <FadeInUpBtn>
                               <h5>This privacy policy discloses the privacy practices for www.amplioso.com. This privacy policy applies solely to information collected by this web site. It will notify you of the following:</h5>
                               </FadeInUpBtn>
                               
                           <div className="faq-boxes">
                           <div className="how-it-ul-policy">
                        <ul>
                            <li>
                            <FaIcons.FaArrowRight />
                            Amplioso is a 360-degree performance feedback software that leverages a proprietary and copyrighted framework of universal performance competencies to provide deep and actionable insights around employee performance.
                            </li>

                            <li>
                            <FaIcons.FaArrowRight />
                            Employees benefit from a clear, 360-degree, data-driven understanding of how they perform on universal performance competencies, personal brand perceptions in the work place, and how they can do better with both internal and external benchmarking.
                            </li>
                            <li>
                            <FaIcons.FaArrowRight />
                            For the companies that work with us, you can gain a comprehensive understanding of how your talent pool compares across teams and versus the industry as well as what your strengths and opportunities are as a talent organization.
                            </li>
                            <li>
                            <FaIcons.FaArrowRight />
                            With our intuitive software, surveys are launched and taken in minutes and only questions that matter are ever included in our surveys. We give you speed, without compromise. Our software as a service model gives you full flexibility to align the frequency of feedback collection with your internal appraisal cycle.
                            </li>
                            <li>
                            <FaIcons.FaArrowRight />
                            We understand talent. Now you can tap into our expertise to help your people do better and raise your performance as an organization.
                            </li>
                        </ul>
                    </div>

                    <div className="policy-content">

                    <div>
                        <p>It is Amplioso.com’s ("Amplioso") policy to respect your privacy regarding any information we may collect while operating our website.</p>
                    </div>

                    <div>
                        <h3>Information Collection, Use, and Sharing</h3>
                        <p>We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via the website, over e-mail or other direct contact from you. We will not sell or rent this information to anyone. We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g. to ship out an invoice.</p>
                    </div>


                    <div>
                        <h3>Your Access to and Control over Information</h3>
                        <p>You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via our website:</p>
                        <div className="how-it-ul-policy">
                        <ul>
                            <li>
                            <FaIcons.FaArrowRight />
                            Amplioso is a 360-degree performance feedback software that leverages a proprietary and copyrighted framework of universal performance competencies to provide deep and actionable insights around employee performance.
                            </li>

                            <li>
                            <FaIcons.FaArrowRight />
                            Employees benefit from a clear, 360-degree, data-driven understanding of how they perform on universal performance competencies, personal brand perceptions in the work place, and how they can do better with both internal and external benchmarking.
                            </li>
                            <li>
                            <FaIcons.FaArrowRight />
                            For the companies that work with us, you can gain a comprehensive understanding of how your talent pool compares across teams and versus the industry as well as what your strengths and opportunities are as a talent organization.
                            </li>
                            <li>
                            <FaIcons.FaArrowRight />
                            With our intuitive software, surveys are launched and taken in minutes and only questions that matter are ever included in our surveys. We give you speed, without compromise. Our software as a service model gives you full flexibility to align the frequency of feedback collection with your internal appraisal cycle.
                            </li>
                            <li>
                            <FaIcons.FaArrowRight />
                            We understand talent. Now you can tap into our expertise to help your people do better and raise your performance as an organization.
                            </li>
                        </ul>
                    </div>
                    </div>

                    <div>
                        <h3>Security</h3>
                        <p>We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline. Wherever we collect sensitive information (such as credit card data), that information is encrypted and transmitted to us in a secure way. You can verify this by looking for a closed lock icon at the bottom of your web browser, or looking for "https" at the beginning of the address of the web page. While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. The computers/servers in which we store personally identifiable information are kept in a secure (cloud) environment.</p>
                    </div>

                    <div>
                        <h3>Cookies</h3>
                        <p>A cookie is a string of information that a website stores on a visitor's computer, and that the visitor's browser provides to the website each time the visitor returns. Amplioso uses cookies to help it identify and track visitors, their usage of the Amplioso website, and their website access preferences. Amplioso visitors who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using Amplioso's website, with the drawback that certain features may not function properly without the aid of cookies.</p>
                    </div>

                    <div>
                        <h3>Ads</h3>
                        <p>Ads appearing on any of our websites may be delivered to users by advertising partners, who may set cookies. These cookies allow the ad server to recognize your computer each time they send you an online advertisement to compile information about you or others who use your computer. This information allows ad networks to, among other things, deliver targeted advertisements that they believe will be of most interest to you. This Privacy Policy covers the use of cookies by Amplioso and does not cover the use of cookies by any advertisers.</p>
                    </div>

                    <div>
                        <h3>Business Transfers</h3>
                        <p>If Amplioso, or substantially all of its assets, were acquired, or in the unlikely event that Amplioso goes out of business or enters bankruptcy, user information would be one of the assets that is transferred or acquired by a third party. You acknowledge that such transfers may occur, and that any acquirer of Amplioso may continue to use your personal information as set forth in this policy.</p>
                    </div>

                    <div>
                        <h3>Updates</h3>
                        <p>Our Privacy Policy may change from time to time and all updates will be posted on this page.</p>
                    </div>

                    <div>
                        <h3>Contact Us</h3>
                        <p>If you have any questions about this policy, please contact us at support@amplioso.com</p>
                    </div>

                                
                                   
                                </div>
                              
                    </div>
                    
                           </div>
                       </section>
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
