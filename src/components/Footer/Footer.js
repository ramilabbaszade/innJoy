import React from 'react'

import innjoy from '../../img/innjoy-white.svg'

import './footer.scss'

const Footer = () => {
    return (
        <footer>
            <div className="footer_container">
                <div className="footer-main">
                    <img src={innjoy} alt="innjoy" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, dolorem. Error fugiat id dignissimos veritatis? Repellendus nulla dolore aliquam saepe.
                    </p>
                    <div className="footer-social">
                        <a href="/courses"><i className='fa fa-facebook'></i></a>
                        <a href="/courses"><i className='fa fa-instagram'></i></a>
                        <a href="/courses"><i className='fa fa-twitter'></i></a>
                        <a href="/courses"><i className='fa fa-play'></i></a>
                    </div>
                </div>
                <ul className="footer-nav">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Courses</a></li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>

                <div className="footer-contact">
                    <i className='fa fa-phone'> 055-555-55-55</i>
                    <i className='fa fa-envelope'> info@innjoy.az</i>
                    <i className='fa fa-map-signs'>  AF Business House (6-cı mər.)</i>
                </div>
            </div>

            <small className="center">
                innJoy © 2020 - All Rights Reserved
            </small>
        </footer>
    )
}

export default Footer
