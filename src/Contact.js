import React, { useState } from 'react'
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
import { Modal } from 'react-bootstrap';
import Ico12 from '.././src/img/ico12.png';

export default function Contact() {
    const [inputField, setinputField] = useState({
        company: '',
        person: '',
        email: '',
        contact: '',
        message: '',
    });


    const [Error, setError] = useState('')
    const [email, setemail] = useState()
    // const myHeader = useRef(null);
    const [paymentNoti, setpaymentNoti] = useState(false);
    const [notification, setnotification] = useState(" ");


    const handleChangeInput = (e) => {
        console.log(e.target.name)
        // let name=e.target.name;
        setinputField({ ...inputField, [e.target.name]: e.target.value })
        console.log(inputField)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (inputField.company == "" && inputField.person == "" && inputField.email == "" && inputField.contact == "" && inputField.message == "") {
            setError("please fill all fields")
        } else if (inputField.company == "") {
            setError("please enter company name")
        } else if (inputField.person == "") {
            setError("please enter person name")
        } else if (inputField.email == "") {
            setError("please enter email name")
        } else if (inputField.contact == "") {
            setError("please enter contact")
        } else if (inputField.message == "") {
            setError("please enter message")
        } else {
            setError("")
            sendMail(inputField.email)
        }

        console.log(inputField)
        
    }


    const sendMail = (email_id) => {
        var notif;
        if (email_id == "") {
            // setnotification("Please Enter The Email")
            // setpaymentNoti(true)
            return false
        }

        console.log(email_id)
        var myHeader = new Headers();
        myHeader.append("Content-Type", "application/json")
        var raw = JSON.stringify({
            mailId: email_id
        });
        var requestOptions = {
            method: "post",
            headers: myHeader,
            body: raw
        }
        fetch(`http://208.109.14.182:9000/masters/GetDemo/sendEmail2`, requestOptions)
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
             

            })

    }

    return (

        <section>
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
                <Modal.Body className="success text-center text-black bold" ><p style={{ cursor: 'pointer',color:"black" }} onClick={() => setpaymentNoti(false)} >Ok</p></Modal.Body>

            </Modal>

            <div className="section">
                <div>

                    <div className="contact-full-wrapper">

                        <section className="wrapper-1-contact">

                            <div className="contact-img">
                                <FadeInFullLeft>
                                    <img src={ContactImg} align="middle" />
                                </FadeInFullLeft>


                            </div>

                            <div>

                            </div>
                            <FadeInUpBtn>
                                <div className="how-it-ul-contact">
                                    <ul>
                                        {/* <li>
                                            <div className="contact-svg-container">
                                                <FaIcons.FaLocationArrow />
                                            </div>
                                            <div>
                                            </div>
                                            <div>
                                                <p>Address</p><span>
                                                    Amploso, HQ 24 Fifth st, Los Angeles, USA</span>
                                            </div>
                                        </li> */}

                                        <li>
                                            <div className="contact-svg-container">
                                                <FaIcons.FaPhone />
                                            </div>
                                            <div>
                                            </div>
                                            <div>
                                                <p>Call Us On</p>
                                                <span>

                                                    Phone : +145 (03) 456 0000 <br /> Support : +145 (03) 456 0000
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
                                        <div style={{overflow:"hidden"}}>
                                           
                                            <h4>Get In Touch</h4>
                                            <p>Have an inquiry or some feedback for us? <br /> Fill out the form below to contact our team.</p>
                                           
                                            {Error ? (
                                                <FadeInText>
                                                    <div className='text-center ' style={{ textTransform: "capitalize" }}>{Error ? Error : ""}</div>
                                                </FadeInText>
                                            ) : null}
                                            <div className="input-text-div">

                                                <div>
                                                    <input type="text" placeholder="Company Name" name="company" onChange={handleChangeInput} />
                                                    <input type="text" placeholder="Contact Person" name="person" onChange={handleChangeInput} />
                                                </div>
                                                <div>
                                                    <input type="text" placeholder="E-mail" name="email" onChange={handleChangeInput} />
                                                    <input type="number" placeholder="Contact No." name="contact" onChange={handleChangeInput} />
                                                </div>
                                                <div>
                                                    <textarea placeholder="Message" name="message" onChange={handleChangeInput} ></textarea>
                                                </div>
                                            </div>

                                            <div className="contact-btn--container">
                                                <button onClick={handleSubmit}>Submit</button>
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
