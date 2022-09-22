import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Test1 from '../img/test1.jpg'
import Test2 from '../img/test2.jpg'
import Test3 from '../img/test3.jpg'
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
                    removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
                   
                    
                   >                
                              
                     <div className="testominals-container">
                        <img src={Test2} />
                        <h5>Ray Kro</h5>
                        <p>
                            " If you hire people just because they can a do a job, they'll work for your money. but if you hire people 
                            who belive what you believe, they'll work for you with blood, sweat, and tears "
                        </p>
                    </div>
                    <div className="testominals-container">
                        
                        <img src={Test3} />
                        <h5>Jack Welch</h5>
                        <p>
                            " Before you are a leader, success is all about growing yourself. When you become a leader, success is all about growing others."
                        </p>
                             
                    </div>
                    <div className="testominals-container">
                        <img src={Test1} />
                        <h5>Harvey Firestone</h5>
                        <p>
                            " I`ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel"
                        </p>
                     </div>

                </Carousel>
            </div>
        </div>
    )
}
