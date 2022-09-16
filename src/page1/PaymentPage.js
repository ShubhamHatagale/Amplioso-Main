import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { FadeInText, FadeInUp, FadeInUpBtn } from '../Animation';
import Notification from '../component/Notification';
import Modal from "react-bootstrap/Modal";
import Ico12 from '../img/ico12.png'


const PaymentPage = () => {
    let location = useLocation();
    const [paymentNoti, setpaymentNoti] = useState(false);
    const [notification, setnotification] = useState(" ");
    let updId = location.state.response_id;
    let history = useHistory()
    // let package_data = location.state.locationData
    const pay = (e) => {
        e.preventDefault();
        console.log("j")

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: "DELETE",
            headers: myHeaders,
            redirect: "follow"
        }
        fetch(`http://localhost:9000/masters/paymt_sts/${updId}`, requestOptions)
            .then((response) => response.json())
            .then((resData) => {
                console.log(resData);
                setnotification("Payement Sucessfull")
                setpaymentNoti(true)

            })

    }


    useEffect(() => {
        console.log(location)

        // return () => {
        //     if (history.action === "POP") {
        //         history.push("/pricing")
        //         // Code here will run when back button fires. Note that it's after the `return` for useEffect's callback; code before the return will fire after the page mounts, code after when it is about to unmount.
        //     }
        // }


    })
    return (
        <>
            <Modal
                size="sm"
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

                <Modal.Body className="success text-center">{notification}</Modal.Body>
                <Modal.Body className="success text-center" ><Link to="/pricing" >Ok</Link></Modal.Body>

            </Modal>

            <section>
                <div className="section wrapper-2-pricing">
                    <div>
                        <div className="contact-full-wrapper mt-5 ">
                            <section className="wrapper-2-contact card  ">
                                <div className="form-div row align-items-center " style={{ marginTop: "15%" }}>
                                    <FadeInUp>
                                        <form >

                                            <FadeInUp>
                                                <div className="price-box">
                                                    <span style={{ textAlign: "center", color: "rgb(43,43,43)" }}>Price Details</span>

                                                    <div>
                                                        <p>{location.state.locationData.package_name}</p>
                                                        <span>{`employee`}</span>
                                                    </div>
                                                    <div>
                                                        <h4>{location.state.locationData.actual_price}</h4>
                                                    </div>
                                                    <div>
                                                        <span>Pricing</span>
                                                        <h5>Only US {location.state.locationData.price}</h5>
                                                    </div>

                                                    <br />

                                                </div>

                                                <div className='row' >
                                                    {/* <span>Pricing</span> */}
                                                    <hr style={{ border: "none", borderTop: "1px dashed #f00", color: "#fff", backgroundColor: "#fff", height: "1px" }} />
                                                    <div className='col-10' style={{ fontWeight: "bold" }} >
                                                        Ammount Payable
                                                    </div>
                                                    <div className='col-2' style={{ fontWeight: "bold" }}>
                                                        {location.state.locationData.price}
                                                    </div>

                                                </div>
                                                <div style={{ marginLeft: "80%", marginTop: "20%" }}>
                                                    {/* <button onClick={() => purchase(`0-10`, 499)}>Purchase</button> */}
                                                    {/* <Link
                                                        className='button'
                                                        style={{ width: "10rem", height: "3rem" }}
                                                  

                                                    > */}
                                                    <button className='button' style={{ backgroundColor: 'red', color: "white", width: "116px", height: "50px" }} onClick={pay}>Pay</button>
                                                    {/* </Link> */}

                                                </div>
                                            </FadeInUp>



                                        </form>
                                    </FadeInUp>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}


export default PaymentPage;