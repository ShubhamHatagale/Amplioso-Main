import React, { useState, useEffect } from 'react'
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
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function Pricing() {

    const history = useHistory()

    const purchase = (a, b) => {
        console.log("a")
        console.log(a)
        console.log(b)
    }

    const [Features, setFeatures] = useState([
        {
            employees_limit: `10`,
            employees_count: `0-10`,
            post: `employees`,
            price_in_dollar: `US$700`,
            us_dollar: `499`
        },
        {
            employees_limit: `100`,
            employees_count: `11-100`,
            post: `employees`,
            price_in_dollar: `US$6000`,
            us_dollar: `3,999`
        },
        {
            employees_limit: `500`,
            employees_count: `101-500`,
            post: `employees`,
            price_in_dollar: `US$12,000`,
            us_dollar: `9,999`
        },
        {
            employees_limit: `5000`,
            employees_count: `501-5000`,
            post: `employees`,
            price_in_dollar: `US$30,000`,
            us_dollar: `24,999`
        },
        {
            employees_limit: `5000`,
            employees_count: `5000+`,
            post: `employees`,
            price_in_dollar: `US$1,20,000`,
            us_dollar: `99,999`
        },

    ])

    const [packages, setPackages] = useState();
    const [PackageId, setPackageId] = useState([]);



    useEffect(() => {
        // console.log = function () { }

        console.log(Features)
        GetPackageData();
    }, [])


    const radioFn = (e) => {
        var id = e.target.value;
        console.log(JSON.stringify(e.target.value))
        // setPackageId(id)

        console.log("yes")
        var myHeaders = new Headers();
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        }
        fetch(`http://localhost:9000/masters/package/${id}`, requestOptions)
            .then(res => res.json())
            .then(result => {
                console.log(result.data)
                setPackageId(result.data)
            })

    }

    const submitToNext = () => {
        console.log(PackageId)
        history.push({
            pathname: '/Purchase_Form',
            state: PackageId
        })
    }

    const GetPackageData = () => {

        console.log("yes")
        var myHeaders = new Headers();
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        }
        fetch(`http://localhost:9000/masters/package`, requestOptions)
            .then(res => res.json())
            .then(result => {
                console.log(result.data)
                setPackages(result.data)
            })




    }

    return (
        <>
            {packages ? (
                <section>

                    <div className="section">
                        <div>

                            <div className="pricing-wrapper">
                                <section className="wrapper-1-pricing">
                                    <div className="pricing-title-conatiner3">
                                        <FadeInText>
                                            <h4>
                                                pricing
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
                                                    <h4>Features and Annual Pricing</h4>
                                                    <p>An investment in talent should be the easiest investment to make for any CFO</p>
                                                </FadeInUpBtn>

                                                <div className="pricing-boxes">
                                                    {packages.map((item, key) => {
                                                        return (
                                                            <FadeInUp>
                                                                <div className="price-box">
                                                                    <div>
                                                                        <p>{item.package_name}</p>
                                                                        <span>{`employee`}</span>
                                                                    </div>
                                                                    <div>
                                                                        <h4>{item.actual_price}</h4>
                                                                    </div>
                                                                    <div>
                                                                        <span>Pricing</span>
                                                                        <h5>Only US {item.price}</h5>
                                                                    </div>
                                                                    <br />
                                                                    <div class="form-check " style={{ marginLeft: "40%" }}>
                                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" value={item.id} id="flexRadioDefault1" onChange={radioFn} />
                                                                    </div>

                                                                    {/* <div>

                                                                        <Link
                                                                            className='button'
                                                                            to={{
                                                                                pathname: "/Purchase_Form",
                                                                                state: { Data: item }
                                                                            }}

                                                                        >
                                                                            <button>Purchase</button>
                                                                        </Link>

                                                                    </div> */}

                                                                </div>
                                                            </FadeInUp>
                                                        )
                                                    })}




                                                </div>

                                                <div>

                                                    {/* <Link

                                                        to={{
                                                            pathname: "/Purchase_Form",
                                                            state: { Data: PackageId }
                                                        }}

                                                    > */}
                                                    <button className='purchase_button' onClick={submitToNext}>Purchase</button>
                                                    {/* </Link> */}

                                                </div>

                                            </div>
                                        </section>
                                    </div>
                                </section>

                                <section className="wrapper-2-benifits">
                                    <div className="benifits-div">
                                        <section>
                                            <div>
                                                <FadeInText>
                                                    <h4>All our packages are packed with the following benefits:</h4>
                                                </FadeInText>
                                                <div className="benifiting-boxes">
                                                    <FadeInUpBtn>
                                                        <div className="benifits-box">
                                                            <div>
                                                                <img src={Ico4} />
                                                                <p>Access to our proprietary performance evaluation framework</p>
                                                            </div>



                                                        </div>
                                                    </FadeInUpBtn>
                                                    <FadeInUpBtn>
                                                        <div className="benifits-box">
                                                            <div>
                                                                <img src={Ico5} />
                                                                <p>Access to our intuitive admin and manager set up portals</p>
                                                            </div>


                                                        </div>
                                                    </FadeInUpBtn>
                                                    <FadeInUpBtn>
                                                        <div className="benifits-box">
                                                            <div>
                                                                <img src={Ico6} />
                                                                <p>Ability to launch surveys to targeted teams and individuals with ease</p>
                                                            </div>


                                                        </div>
                                                    </FadeInUpBtn>
                                                    <FadeInUpBtn>
                                                        <div className="benifits-box">
                                                            <div>
                                                                <img src={Ico7} />
                                                                <p>Access to all your talent insights in one portal</p>
                                                            </div>


                                                        </div>
                                                    </FadeInUpBtn>
                                                    <FadeInUpBtn>
                                                        <div className="benifits-box">
                                                            <div>
                                                                <img src={Ico8} />
                                                                <p>Access to internal and external talent benchmarking</p>
                                                            </div>


                                                        </div>
                                                    </FadeInUpBtn>
                                                    <FadeInUpBtn>
                                                        <div className="benifits-box">
                                                            <div>
                                                                <img src={Ico9} />
                                                                <p>Access to our world-class reporting platform and PDF summary reports</p>
                                                            </div>


                                                        </div>
                                                    </FadeInUpBtn>





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
            ) : null}

        </>


    )

}
