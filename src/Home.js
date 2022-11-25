import React, { useRef, useEffect, useState } from 'react'
import './Home.css'
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
import Footer from './component/Footer';
import Testominals from './component/Testominals';
import { FadeInDown, FadeInText, FadeInUp, FadeInImg, FadeInUpBtn, FadeInRight, FadeInLeft, FadeInUpImg } from './Animation.js'
import { gsap } from 'gsap';
import { useHistory, Link } from 'react-router-dom'
import Modal from "react-bootstrap/Modal";
// import Ico12 from '../img/ico12.png'
import Ico12 from './img/ico12.png'
export default function Home() {
    const history = useHistory()

    const myContainer = useRef(null);
    const detailText = useRef(null);
    const firstText = useRef(null);
    const [email, setemail] = useState()
    // const myHeader = useRef(null);
    const [paymentNoti, setpaymentNoti] = useState(false);
    const [notification, setnotification] = useState(" ");

    const sendMail = (a) => {
        var notif;
        if (email == "") {
            // setnotification("Please Enter The Email")
            // setpaymentNoti(true)
            return false
        }

        console.log(email)
        var myHeader = new Headers();
        myHeader.append("Content-Type", "application/json")
        var raw = JSON.stringify({
            mailId: email
        });
        var requestOptions = {
            method: "post",
            headers: myHeader,
            body: raw
        }
        fetch(`http://localhost:9000/masters/GetDemo/sendEmail`, requestOptions)
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.status == 200) {
                    setnotification("Request has been sent successfully.")
                    setpaymentNoti(true)
                    setemail("")
                } else {
                    setnotification("! Error,Please Check Your EmailId")
                    setpaymentNoti(true)
                    setemail("")
                }
                // if (result.massage != undefined) {
                //     setnotification("Request has been sent successfully.")
                //     setpaymentNoti(true)
                //     setemail("")

                // } else {
                //     // setnotification("! " + result.errors[0].msg.replace("username", "email"))
                //     setnotification("Please Enter The Valid Email")
                //     setpaymentNoti(true)
                // }


                // if (!result.errors.length) {
                //     console.log(result.errors[0].msg.replace("username", "email"))
                //     setnotification("! "+result.errors[0].msg.replace("username", "email"))
                //     setpaymentNoti(true)

                // }else{
                //     setnotification("Request has been sent successfully.")
                //     setpaymentNoti(true)
                //     setemail("")
                // }

            })

    }

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

                        <Modal
                            size="lg"
                            show={paymentNoti}
                            onHide={() => setpaymentNoti(false)}
                            aria-labelledby="example-modal-sizes-title-lg"
                            centered
                        // aria-labelledby="contained-modal-title-vcenter"

                        // style={{position:"relative",bottom:"5px"}}
                        >
                            <Modal.Body className="success text-center">
                                <img style={{ height: "80px", width: "80px" }} src={Ico12} />
                            </Modal.Body>
                            {/* <Modal.Body className="success text-center">{`Payment Successfull`}</Modal.Body> */}

                            <Modal.Body className="success text-center text-danger bold h3">{notification}</Modal.Body>
                            <Modal.Body className="success text-center text-black bold" ><p style={{ cursor: 'pointer' }} onClick={() => setpaymentNoti(false)} >Ok</p></Modal.Body>

                        </Modal>

                        <ReactFullpage.Wrapper>

                            <div className="section">
                                <div>

                                    <div className="home-wrapper">
                                        <section className="video-wrapper-1">
                                            <div className="left-flex-container">
                                                <div className="title-conatiner title-conatiner-para">
                                                    <h4 ref={firstText}>
                                                        360-degree feedback for your human capital
                                                        that is simple, actionable and performance enhancing
                                                    </h4>
                                                    <div className="line">

                                                    </div>

                                                </div>

                                                <div className="mob-video">

                                                    <video autoPlay loop muted id="video-mob">
                                                        <source src={Sidevideo} type='video/mp4' align="center" />
                                                    </video>


                                                    {/* <div className="signbutton-conatiner" ref={myContainer}>
                                                        <button onClick={() => history.push("/sign_in")}>sign in</button>
                                                    </div> */}
                                                </div>
                                            </div>
                                        </section>

                                        <section className="video-wrapper-2">
                                            <div ref={myContainer}>
                                                <video autoPlay loop muted id="video">
                                                    <source src={Sidevideo} type='video/mp4' />
                                                </video>
                                            </div>
                                        </section>

                                    </div>
                                </div>
                            </div>
                            <div className="section">
                                <div className="home-wrapper2">
                                    <section className="home-wrapper-1">
                                        <div className="left-flex-container">
                                            <FadeInText>
                                                <div className="title-conatiner2">

                                                    <h4>
                                                        What <br /> We Do
                                                    </h4>

                                                    <div className="line">

                                                    </div>
                                                </div>
                                            </FadeInText>

                                        </div>
                                    </section>
                                    <section className="home-wrapper-2">

                                        <img src={Wedo1} />

                                        <FadeInLeft>
                                            <div className="wedo-text ">
                                                <p>
                                                    At Amplioso, we`ve perfected the art and science of ready-to-launch
                                                    performance surveys for your teams.
                                                </p>
                                                <br />
                                                <br />
                                                <p>
                                                    Our approach to feedback helps your team do better and drive results
                                                </p>
                                            </div>
                                        </FadeInLeft>
                                    </section>
                                </div>
                            </div>
                            <div className="section">
                                <div className="services-container">

                                    <div className="abt-img-bak-home"></div>
                                    <FadeInText>
                                        <div className="features-title-container"><h4>Why US</h4></div>
                                    </FadeInText>
                                    <div className="line-cent">
                                        <div className="linebg"></div>
                                    </div>
                                    <div className="home-grid-wrapper">
                                        <FadeInUp>
                                            <div className="grid-1">

                                                <img src={Ico1} />

                                                <div className="text-cont-line">
                                                    <h4>
                                                        Proprietary Intellectual Capital
                                                    </h4>
                                                    <div className="mob-line-cent">
                                                        <div className="linebg"></div>
                                                    </div>
                                                </div>
                                                <p className='text-dark'>
                                                    A proprietary framework of performance 'metrics that matter' for managers and individual contributors.
                                                </p>

                                            </div>
                                        </FadeInUp>
                                        <FadeInUp>
                                            <div className="grid-1">
                                                <img src={Ico2} />
                                                <div className="text-cont-line">
                                                    <h4>
                                                        Simple and Actionable
                                                    </h4>
                                                    <div className="mob-line-cent">
                                                        <div className="linebg"></div>
                                                    </div>
                                                </div>
                                                <p className='text-dark'>
                                                    Launch ready-to-go surveys and collect actionable performance results for all your teams in minutes.
                                                </p>
                                            </div>
                                        </FadeInUp>
                                        <FadeInUp>
                                            <div className="grid-1">
                                                <img src={Ico3} />
                                                <div className="text-cont-line">
                                                    <h4>
                                                        Learn and  Evolve
                                                    </h4>
                                                    <div className="mob-line-cent">
                                                        <div className="linebg"></div>
                                                    </div>
                                                </div>
                                                <p className='text-dark'>
                                                    Raise the bar with our approch that enables people analytics with rich internal and external benchmarking insights.
                                                </p>
                                            </div>
                                        </FadeInUp>
                                    </div>


                                    <div className="abt-img-bak2-home2"></div>

                                </div>
                            </div>
                            <div className="section">
                                <div className="req-demo">
                                    <FadeInUpBtn>
                                        <img src={Request} />
                                    </FadeInUpBtn>

                                    <FadeInUpImg>
                                        <div className="req-text-fields">
                                            <h4>
                                                Request a demo
                                            </h4>
                                            <p>no credit card required</p>
                                            <input type="text" placeholder="ENTER EMAIL ADDRESS" value={email} onChange={(e) => setemail(e.target.value)} />
                                            <button onClick={() => sendMail("0")}>GET DEMO</button>
                                        </div>
                                    </FadeInUpImg>
                                </div>
                            </div>

                            <div className="section">
                                <div className="home-footer-container">
                                    <Testominals />

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
