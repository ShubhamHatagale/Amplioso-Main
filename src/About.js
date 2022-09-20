import React, { useRef, useEffect } from 'react'
import './About.css'
import './responsive.css'
import Header from './component/Header'
import Sidevideo from './img/video.mp4'
import ReactFullpage from '@fullpage/react-fullpage';
import Wedo from './img/wedo.png'
import Wedo1 from './img/wedo1.png'
import Request from './img/req1.png'
import Ico1 from './img/ico1.png'
import Ico2 from './img/ico2.png'
import Ico3 from './img/ico3.png'
import AboutImg from './img/about4.jpg'
import AboutImg1 from './img/about.jpg'
import AboutImg2 from './img/about5.jpg'
import Footer from './component/Footer';
import Testominals from './component/Testominals';
import * as FaIcons from 'react-icons/fa'
import { HashRouter as Router, Link, NavLink, useLocation } from 'react-router-dom';
import { FadeInDown, FadeInText, FadeInUp, FadeInImg, FadeInUpBtn, FadeInRight, FadeInLeft, FadeInUpImg, FadeInFullLeft } from './Animation.js'
import { gsap } from 'gsap';

export default function About() {

    const myContainer = useRef(null);
    const detailText = useRef(null);
    const firstText = useRef(null);
    // const myHeader = useRef(null);



    useEffect(() => {

        gsap.from(myContainer.current, {
            opacity: 0,
            transform: 'translate3d(0, 100vh, 0)',
            ease: "ease.in(1.4)",
            duration: 1,
        })
        gsap.from(detailText.current, {
            opacity: 0,
            transform: 'translate3d(5vw, 0, 0)',
            ease: "ease.out(5.4)",
            duration: 2,

        });
        gsap.from(firstText.current, {
            opacity: 0,


            duration: 4,

        });
    }, []);



    return (
        <ReactFullpage
            licenseKey={'YOUR_KEY_HERE'}
            scrollingSpeed={1000} /* Options here */
            scrollHorizontally={true}  /* Because we are using the extension */
            scrollHorizontallyKey={'YOUR KEY HERE'}

            render={() => {
                return (
                    <section>

                        <ReactFullpage.Wrapper>

                            <div className="section">
                                <div>

                                    <div className="about-wrapper">
                                        <section className="aboutab-wrapper-1">
                                            <div className="left-flex-container">
                                                <div className="about-title-conatiner">

                                                    <h4 ref={firstText}>
                                                        Amplio is <br /> Latin for improvement
                                                    </h4>

                                                    <div className="linea">

                                                    </div>
                                                    <p ref={detailText}>
                                                        Today, performance appraisal and coaching discussions are often seen as arbitrary or even biased only because there is a lack of hard data to support these discussions. Imagine if you could elevate the quality of these discussions each time with 360-degree feedback that is anonymous, objective, and actionable.
                                                    </p>
                                                </div>

                                            </div>
                                        </section>
                                        <section className="wrapper-2">

                                            <div className="abt-img-bak">

                                            </div>
                                            <div className="abt-img" ref={detailText}>
                                                <img src={AboutImg} align="right" />
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                            <div className="section">
                                <div className="about-wrapper2">
                                    <section className="about-wrapper-1">
                                        <div className="left-flex-container">
                                            <div className="about-title-conatiner23">

                                                <div>
                                                    <FadeInText>
                                                        <h4>
                                                            About Us
                                                        </h4>
                                                    </FadeInText>
                                                    <div className="linea">

                                                    </div>

                                                    {/* <p>
                            Today, performance appraisal and coaching discussions are often seen as arbitrary or even biased only because there is a lack of hard data to support these discussions. Imagine if you could elevate the quality of these discussions each time with 360-degree feedback that is anonymous, objective, and actionable.
                            </p> */}


                                                </div>


                                            </div>

                                        </div>
                                    </section>
                                    <section className="about-wrapper-2">

                                        <img src={Wedo1} align="top" />
                                        <FadeInUp>
                                            <div className="abdo-text">

                                                <p>
                                                    As a start-up, we're looking to solve the problem of poor
                                                    360-degree performance feedback that plagues most organizations.
                                                    Amplio is Latin for improvement. We believe our approach to 360-degree feedback
                                                    can improve your performance as a business and drive personal and professional improvement
                                                    for the people that power it. A better feedback process drives positive employee engagement
                                                    and therefore better business performance. We started Amplioso because we believe
                                                    solid performance feedback is hard to come by in most organizations and that it ought
                                                    to be made simpler and more digestible.
                                                </p>

                                                <br />


                                                <span>
                                                    We're unique because our software is easy to get started with, our survey approach is simple and well-thought through, and the actionable insights and results will help you elevate your team's performance. Our goal is to help organizations unlock the fullest potential of their human capital. Better ongoing feedback = engaged employees = better business outcomes.
                                                </span>


                                            </div>
                                        </FadeInUp>
                                    </section>
                                </div>
                            </div>

                            <div className="section">
                                <div>

                                    <div className="about-wrapper">
                                        <section className="wrapper-1-about">
                                            <div className="abt-img-bak2">

                                            </div>
                                            <FadeInFullLeft>
                                                <div className="abt-img2">
                                                    <img src={AboutImg1} />
                                                </div>
                                            </FadeInFullLeft>

                                        </section>
                                        <section className="wrapper-2-about">
                                            <div className="about-title-conatiner3">
                                                <FadeInText>
                                                    <h4>
                                                        How it works?
                                                    </h4>
                                                </FadeInText>
                                                <div className="line">

                                                </div>

                                            </div>
                                            <FadeInLeft>
                                                <div className="how-it-ul">
                                                    <ul>
                                                        <li>
                                                            <FaIcons.FaArrowRight />
                                                            Once your business signs up for any of our tailored packages, a person of your choice is sent login credentials as a master administrator.
                                                        </li>

                                                        <li>
                                                            <FaIcons.FaArrowRight />
                                                            This master administrator now has rights to assign manager rights to all your people managers. As soon as these manager rights are granted, your people managers get access rights to launch surveys
                                                        </li>
                                                        <li>
                                                            <FaIcons.FaArrowRight />
                                                            People managers can then log into the system to launch pre-populated (or customized) 360-degree surveys for all their team members, collect results, and compare scores across their teams.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </FadeInLeft>
                                        </section>
                                    </div>
                                </div>
                            </div>

                            <div className="section">
                                <div>

                                    <div className="about-wrapper">
                                        <section className="wrapper-2-about">
                                            <div className="about-title-conatiner4">
                                                <FadeInText>
                                                    <h4>
                                                        Our surveys are grounded in academic research and pack a punch
                                                    </h4>
                                                </FadeInText>
                                                <div className="line">

                                                </div>

                                            </div>
                                            <FadeInFullLeft>
                                                <div className="how-it-ul">
                                                    <ul>
                                                        <li>
                                                            <FaIcons.FaArrowRight />
                                                            Our Universal Competencies approach assesses performance holistically for both managers and individual contributors.
                                                        </li>

                                                        <li>
                                                            <FaIcons.FaArrowRight />
                                                            Given these core questions are consistent across our surveys, you benefit from comparability and analytics across your teams but also across your industry.
                                                        </li>
                                                        <li>
                                                            <FaIcons.FaArrowRight />
                                                            You still have flexibility to add or delete questions based on what you think works best for your teams.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </FadeInFullLeft>


                                        </section>
                                        <section className="wrapper-1-about">
                                            <div className="abt-img-bak3">

                                            </div>

                                            <div className="abt-img3">
                                                <FadeInLeft>
                                                    <img src={AboutImg2} />
                                                </FadeInLeft>
                                            </div>

                                        </section>
                                    </div>
                                </div>
                            </div>



                            <div className="section">
                                <div className="home-footer-container">
                                    <div className="about-title-conatiner5">
                                        <h4>
                                            Still have questions?
                                        </h4>
                                        <div className="line-center">
                                            <div className="linea">

                                            </div>
                                        </div>

                                        <p>
                                            Read our <Link to='/faq'> FAQs </Link> or <Link to='/contact'> Contact Us </Link> here
                                        </p>

                                    </div>

                                    <Footer />
                                </div>
                            </div>

                        </ReactFullpage.Wrapper>


                    </section>
                );
            }}
        />
    )
}
