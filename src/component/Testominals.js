import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Test1 from '../img/test1.jpg'
import Test2 from '../img/test2.jpg'
import Test3 from '../img/test3.jpg'
import Test4 from '../assets/images/blogs/Andre.png'
import Test5 from '../assets/images/blogs/BillGates.png'
import Test6 from '../assets/images/blogs/SamWalton.png'
import Test7 from '../assets/images/blogs/SherylSandberg.png'

import './Component.css';

export default function Testominals() {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };



    return (
        <div>
            <div className="testominals-wrapper">
                <Carousel
                    responsive={responsive}
                    swipeable={true}
                    draggable={false}
                    showDots={false}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="transform 1000ms ease-in-out"
                    transitionDuration={1000}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}

                >

                    <div className="testominals-container">
                        <img src={Test2} />
                        <h5>Ray Kro</h5>
                        <p style={{ color: "black" }}>
                            " If you hire people just because they can a do a job, they'll work for your money. but if you hire people
                            who belive what you believe, they'll work for you with blood, sweat, and tears "
                        </p>
                    </div>
                    <div className="testominals-container">

                        <img src={Test3} />
                        <h5>Jack Welch</h5>
                        <p style={{ color: "black" }}>

                            " Before you are a leader, success is all about growing yourself. When you become a leader, success is all about growing others."
                        </p>

                    </div>
                    <div className="testominals-container">
                        <img src={Test1} />
                        <h5>Harvey Firestone</h5>
                        <p style={{ color: "black" }}>
                            " I`ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel"
                        </p>
                    </div>

                    <div className="testominals-container">
                        <img src={Test4} />
                        <h5>Andre Malraux</h5>
                        <p style={{ color: "black" }}>
                            " To command is to serve, nothing more and nothing less."
                        </p>
                    </div>

                    <div className="testominals-container">
                        <img src={Test5} />
                        <h5>Bill Gates</h5> 
                        <p style={{ color: "black" }}>
                            " As we look ahead into the next century, leaders will be those who empower others. "
                        </p>
                    </div>

                    <div className="testominals-container">
                        <img src={Test6} />
                        <h5>Sam Walton</h5>
                        <p style={{ color: "black" }}>
                            " Outstanding leaders go out of their way to boost the self-esteem of their personnel. If people believe in themselves, it's amazing what they can accomplish."
                        </p>
                    </div>

                   

                    <div className="testominals-container">
                        <img src={Test7} />
                        <h5>Sheryl Sandberg</h5>
                        <p style={{ color: "black" }}>
                            " Leadership is about making others better as a result of your presence, and making sure that impact lasts in your absence."
                        </p>
                    </div>



                </Carousel>
            </div>
        </div>
    )
}
