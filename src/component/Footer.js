import React, { useState } from 'react'
import FooterLogo from '../img/logow.png'
import './Component.css';
import { HashRouter as Router, Link, NavLink, useLocation } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa'
import Modal from "react-bootstrap/Modal";
import Ico12 from '../img/ico12.png';

export default function Footer() {
    const [email, setemail] = useState()
    // const myHeader = useRef(null);
    const [paymentNoti, setpaymentNoti] = useState(false);
    const [notification, setnotification] = useState(" ");
    const sendMail = () => {
        // alert("h")
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
        fetch(`http://208.109.14.182:9000/masters/GetDemo/sendEmail`, requestOptions)
            .then(res => res.json()).then(result => {
                console.log(result.status)
                console.log(result.message)

                if (result.status == 200) {
                        setnotification("Request has been sent successfully.")
                        setpaymentNoti(true)
                        setemail("")
                }else{
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
                //     setnotification("Successfully Subscribed")
                //     setpaymentNoti(true)
                // }
            })
    }

    return (
        <div>
            <Modal
                size="lg"
                show={paymentNoti}
                onHide={() => setpaymentNoti(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                centered
            >
                <Modal.Body className="success text-center">
                    <img style={{ height: "80px", width: "80px" }} src={Ico12} />
                </Modal.Body>

                <Modal.Body className="success text-center text-danger bold h3">{notification}</Modal.Body>
                <Modal.Body className="success text-center text-black bold" ><p style={{ cursor: 'pointer' }} onClick={() => setpaymentNoti(false)} >Ok</p></Modal.Body>

            </Modal>


            <section className="footer-grid-wrapper">
                <div className="left-grid">
                    <img src={FooterLogo} />
                    <p>At amplioso, we believe that there is no other business performance lever as important
                        as talent. The right people working together towards a common purpose can be magical
                    </p>
                </div>
                <div className="center-grid">
                    <p style={{marginLeft:"32px"}}>Links</p>
                    <ul>
                        <li><Link to='/about'>About us </Link></li>
                        <li><Link to='/pricing'>Pricing</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                <div className="center-grid">
                    <p style={{marginLeft:"32px"}}>Legal</p>
                    <ul>
                        <li><Link to='/terms'>Terms of Services</Link></li>
                        <li><Link to='/policy'>Privacy Policy</Link></li>
                        <li><Link to='/faq'>FAQ`s</Link></li>
                    </ul>
                </div>
                <div className="center-grid">
                    <p>Newsletter</p>
                    <div className="newsletter-input">
                        <input type="text" placeholder="Subscribe" value={email} onChange={(e) => setemail(e.target.value)} />
                        <button onClick={sendMail}><FaIcons.FaArrowRight /></button>
                    </div>
                    <br />
                    <span>Follow us on Social Media</span>
                    <div className="social-flex">
                        <ul>
                            <li><FaIcons.FaFacebookSquare /></li>
                            <li><FaIcons.FaInstagramSquare /></li>
                            <li><FaIcons.FaTwitterSquare /></li>
                            <li><FaIcons.FaLinkedin /></li>
                        </ul>
                    </div>
                </div>
                <div className="right-grid">
                    <p>	&copy; amplioso {new Date().getFullYear()}. All rights Reserved.</p>
                    <p>Powered by Conversant Technologies</p>

                </div>
                <div>

                </div>
            </section>
        </div>
    )
}
