import React from 'react'
import '../../src/assets/css/form-steps.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const ThankYou = () => {
    return (
        <>
            <div>
                <fieldset>
                    <div style={{ marginTop: "12%" }}>

                        <h2 className="purple-text text-center"><strong>Thank You !<br />
                            {/* Thanks for subscribing to our news letter. */}
                        </strong></h2>
                        <div className="row justify-content-center">
                            <div className="col-3">
                                <div className="success-animation" style={{ padding: "5px", overflow: "hidden" }}>
                                    <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                        <circle className="checkmark__circle" cx={26} cy={26} r={25} fill="none" />
                                        <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <br />
                        <div className="row justify-content-center">
                            <div className="col-7 text-center">
                                <h5 className="text-center" style={{ fontWeight: "500px" }}>Thanks for subscribing to our news letter.you should receive a confirmation email soon</h5>
                            </div>
                            <div className="col-7 text-center m-5" >
                                <Link to="/" className="btn btn-outline-danger" style={{ padding: "14px", width: "226px" }}>Go To Home</Link>
                            </div>
                        </div>

                    </div>
                </fieldset>
            </div>
        </>

    )
}

export default ThankYou
