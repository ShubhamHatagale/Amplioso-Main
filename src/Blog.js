import React from 'react'
import './About.css'

import Footerext from './component/Footerext';
import Test1 from './img/about3.jpg'
import Test2 from './img/test2.jpg'
import Test3 from './img/test3.jpg'
import * as FaIcons from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { FadeInDown, FadeInText, FadeInUp, FadeInImg, FadeInUpBtn, FadeInRight, FadeInLeft, FadeInUpImg, FadeInFullLeft } from './Animation.js'

export default function Blog() {
    return (
        
       <section>

<div className="section">
            <div className="blog-wrapper2">
                <section className="blog-wrapper-1">

                            <div className="blog-title-conatiner2">
                                <FadeInText>
                            <h4>
                               Blogs
                            </h4>
                            </FadeInText>
                            <div className="line">
                                
                            </div>
                          
                            
                        </div> 
                    </section>
                    <div className="blg-img-bak-home"></div>

                    <div className="blg-img-bak-home3"></div>
                    <section className="blog-wrapper-2">
                       
                       <div className="blog-boxes-row">
                           <div>
                               <img src={Test1} />
                              
                               <h5>What Amazing Bosses Do Differently</h5>
                               <Link to="https://hbr.org/2015/11/what-amazing-bosses-do-differently">read blog <FaIcons.FaArrowRight /></Link>
                               
                            </div>
                            <div>
                               <img src={Test1} />
                               <h5>how to hang on to your high potentials</h5>
                               <Link to="https://hbr.org/2015/11/what-amazing-bosses-do-differently">Read More</Link>
                            </div>
                            <div>
                               <img src={Test1} />
                               <h5>how google attracts the worlds best talent</h5>
                               <Link to="https://hbr.org/2015/11/what-amazing-bosses-do-differently">Read More</Link>
                            </div>
                            <div>
                               <img src={Test1} />
                               <h5>how to hang on to your high potentials</h5>
                               <Link to="https://hbr.org/2015/11/what-amazing-bosses-do-differently">Read More</Link>
                            </div>
                            <div>
                               <img src={Test1} />
                               <h5>how to hang on to your high potentials</h5>
                               <Link to="https://hbr.org/2015/11/what-amazing-bosses-do-differently">Read More</Link>
                            </div>
                            <div>
                               <img src={Test1} />
                               <h5>how to hang on to your high potentials</h5>
                               <Link to="https://hbr.org/2015/11/what-amazing-bosses-do-differently">Read More</Link>
                            </div>
                            <div>
                               <img src={Test1} />
                               <h5>how to hang on to your high potentials</h5>
                               <Link to="https://hbr.org/2015/11/what-amazing-bosses-do-differently">Read More</Link>
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
