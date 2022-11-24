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
         image: "https://www.mckinsey.com/~/media/mckinsey/business%20functions/people%20and%20organizational%20performance/our%20insights/back%20to%20human%20why%20hr%20leaders%20want%20to%20focus%20on%20people%20again/back-to-human-hero-1536x864.jpg?mw=1536&car=72:35&cq=50",
         descreption: "‘Back to human’: Why HR leaders want to focus on people again",
         url: "https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/back-to-human-why-hr-leaders-want-to-focus-on-people-again"
      },
      {
         image: "https://static01.nyt.com/images/2020/05/21/reader-center/21burst-to-do-list/21burst-to-do-list-blog480-v2.gif",
         descreption: "How to Make the Most of Your Workday",
         url: "https://www.nytimes.com/guides/business/how-to-improve-your-productivity-at-work"
      },
      {
         image: "https://www.workhuman.com/wp-content/uploads/2022/08/EmployeeTurnover_674x354.png",
         descreption: "How to Reduce Employee Turnover in 2022: 12 Strategies that Work",
         url: "https://www.workhuman.com/blog/12-surefire-tips-to-reduce-employee-turnover/"
      },
      {
         image: Test1,
         descreption: "https://hbr.org/2015/11/what-amazing-bosses-do-differently",
         url: "https://hbr.org/2015/11/what-amazing-bosses-do-differently"
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
