import React from 'react'
import './About.css'

import Footerext from './component/Footerext';
import Test1 from './img/about3.jpg'
import Test2 from './img/test2.jpg'
import Test3 from './img/test3.jpg'
import * as FaIcons from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { FadeInDown, FadeInText, FadeInUp, FadeInImg, FadeInUpBtn, FadeInRight, FadeInLeft, FadeInUpImg, FadeInFullLeft } from './Animation.js'
import img1 from './assets/images/blogs/Andre.png'
import img2 from './assets/images/blogs/BillGates.png'
import img3 from './assets/images/blogs/SamWalton.png'
import img4 from './assets/images/blogs/SherylSandberg.png'

export default function Blog() {

   const blogDetails = [
      {
         image: img1,
         descreption: "To command is to serve, nothing more and nothing less. —Andre Malraux",
         url: "https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/back-to-human-why-hr-leaders-want-to-focus-on-people-again"
      },
      {
         image: img2,
         descreption: "Outstanding leaders go out of their way to boost the self-esteem of their personnel. If people believe in themselves, it's amazing what they can accomplish. —Sam Walton",
         url: "https://www.nytimes.com/guides/business/how-to-improve-your-productivity-at-work"
      },
      {
         image: img3,
         descreption: "As we look ahead into the next century, leaders will be those who empower others. —Bill Gates",
         url: "https://www.workhuman.com/blog/12-surefire-tips-to-reduce-employee-turnover/"
      },
      {
         image: img4,
         descreption: "Leadership is about making others better as a result of your presence, and making sure that impact lasts in your absence.” —Sheryl Sandberg",
         url: "https://www.kornferry.com/insights/this-week-in-leadership/the-great-resignation-big-regret"
      }

   ]
   return (

      <section>

         <div className="section">
            <div className="blog-wrapper2">
               <section className="blog-wrapper-1">

                  <div className="blog-title-conatiner2">
                     <FadeInText>
                        <h4 style={{ overflow: "hidden" }}>
                           Blogs
                        </h4>
                     </FadeInText>
                     <div className="line">

                     </div>


                  </div>
               </section>
               {/* <div className="blg-img-bak-home"></div>

               <div className="blg-img-bak-home3"></div> */}
               <section className="blog-wrapper-2">

                  <div className="blog-boxes-row" >
                     {blogDetails.map((item, key) => {

                        return (
                           <div>
                              <img src={item.image} />

                              <h5>{item.descreption}</h5>
                              <a href={item.url}>Read More
                                 {/* <FaIcons.FaArrowRight /> */}
                              </a>

                           </div>
                        )

                     })}

                     {/* <div>
                        <img src={img2} />
                        <h5>how to hang on to your high potentials</h5>
                        <a href="https://hbr.org/2015/11/what-amazing-bosses-do-differently">Read More</a>
                     </div>
                     <div>
                        <img src={img3} />
                        <h5>how google attracts the worlds best talent</h5>
                        <a href="https://hbr.org/2015/11/what-amazing-bosses-do-differently">Read More</a>
                     </div>
                     <div>
                        <img src={img4} />
                        <h5>how to hang on to your high potentials</h5>
                        <a href="https://hbr.org/2015/11/what-amazing-bosses-do-differently">Read More</a>
                     </div> */}
                     <div>
                        <img src={Test1} />
                        <h5>how to hang on to your high potentials</h5>
                        <a href="https://hbr.org/2015/11/what-amazing-bosses-do-differently">Read More</a>
                     </div>
                     <div>
                        <img src={Test1} />
                        <h5>how to hang on to your high potentials</h5>
                        <a href="https://hbr.org/2015/11/what-amazing-bosses-do-differently">Read More</a>
                     </div>
                     <div>
                        <img src={Test1} />
                        <h5>how to hang on to your high potentials</h5>
                        <a href="https://hbr.org/2015/11/what-amazing-bosses-do-differently">Read More</a>
                     </div>


                  </div>


               </section>
            </div>
         </div>


         <div>
            <Footerext />
         </div>











      </section>



   )

}
