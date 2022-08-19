import React from 'react'
import FooterLogo from '../img/logow.png'
import './Component.css';
import * as FaIcons from 'react-icons/fa';
import {HashRouter as Router, Link, NavLink, useLocation } from 'react-router-dom';

export default function Footerext() {
    return (
        <div>
            <section className="footerext-grid-wrapper">
                <div className="left-grid">
                    <img src={FooterLogo} />
                    <p>At amplioso, we believe that there is no other business performance lever as important 
                        as talent. The right people working together towards a common purpose can be magical
                    </p>
                </div>
                <div className="center-grid">
                    <p>Links</p>
                    <ul>
                        <li><Link to='/about'>About us </Link></li>
                        <li><Link to='/pricing'>Pricing</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                <div className="center-grid">
                    <p>Legal</p>
                    <ul>
                    <li><Link to='/terms'>Terms of Services</Link></li>
                        <li><Link to='/policy'>Privacy Policy</Link></li>
                        <li><Link to='/faq'>FAQ`s</Link></li>
                    </ul>
                </div>
                <div className="center-grid">
                    <p>Newsletter</p>
                    <div className="newsletter-input">
                        <input type="text" placeholder="Subscribe"/>
                        <button><FaIcons.FaArrowRight/></button>
                    </div>
                    <br/>
                    <span>Follow us on Social Media</span>
                    <div className="social-flex">
                    <ul>
                        <li><FaIcons.FaFacebookSquare /></li>
                        <li><FaIcons.FaInstagramSquare /></li>
                        <li><FaIcons.FaTwitterSquare /></li>
                        <li><FaIcons.FaLinkedin /></li>
                    </ul>
                    </div>
                </div>
                <div className="right-grid">
                    <p>	&copy; amplioso 2021. All rights Reserved.</p>
                    <p>Designed and Developed by Conversant Technologies</p>
                   
                </div>
                <div>

                </div>
            </section>
        </div>
    )
}
