import React, { useState, useEffect } from 'react'
import './Component.css';
import { HashRouter as Router, Link, useLocation } from 'react-router-dom';
import HeadLogo from '../img/logo.png'
import * as FaIcons from 'react-icons/fa'

export default function Header(props) {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground)

    return (

        <section>




            <div className="navbar">


                <div className={navbar ? "nav-header active" : "nav-header"}>


                    <div className="header-logo">
                        <Link to="/"> <img src={HeadLogo} className="navlogo" /></Link>
                    </div>


                    <div className="menu-bars2">
                        <Link to='#'>
                            <FaIcons.FaStream onClick={showSidebar} className="menu-toggle" />


                        </Link>
                    </div>
                </div>
            </div>



            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>



                <ul className="nav-menu-items" onClick={showSidebar}>
                    {/* <li className="">
                        <FaIcons.FaUserCircle style={{fontSize:"44px",margin:"5px"}} className="user-circle" />
                        <Link to="/sign_in"><span style={{ fontSize: "20px",fontWeight:"bolder" }}>Sign In</span></Link>
                    </li> */}
                    <li className="navbar-toggle close-btn" >
                        <Link to="#" className="menu-bars">
                            <FaIcons.FaTimes />
                        </Link>
                    </li>
                    <br />
                    <br />
                    <br />
                    {/* <ul className="mobile-nav-links-con"> */}
                    <li className="mob-links-btns1">
                    </li>
                    <li className="sign_in_block">
                        {/* <FaIcons.FaUserCircle style={{fontSize:"44px",margin:"5px"}} className="user-circle" /> */}

                        <Link to="/sign_in">
                            <span className='loginHamburger'>Login</span>
                            <FaIcons.FaSignInAlt className='signInArrow' />

                        </Link>


                    </li>

                    <li className="mob-links-btns">
                        <Link to="/about"><span>About</span></Link>
                    </li>
                    <li className="mob-links-btns">
                        <Link to="/pricing"><span>Pricing</span></Link>
                    </li>

                    <li className="mob-links-btns">
                        <Link to="/blog" ><span>Blog</span></Link>
                    </li>
                    <li className="mob-links-btns">
                        <Link to="/contact" ><span>Contact</span></Link>
                    </li>
                </ul>
                <div>
                    <p className="follow-title">FOLLOW US ON</p>
                    <ul className="nav-social-items">

                        <li>
                            <p>Facebook</p>
                        </li>
                        <li>
                            <p>Instagram</p>
                        </li>
                        <li>
                            <p>Twitter</p>
                        </li>
                        <li>
                            <p>Linkdin</p>
                        </li>
                    </ul>
                </div>




            </nav>
            <div>{props.data}</div>

        </section>



    )
}
