import React from 'react';
import logo from '../../assets/logo1.png';
import './Footer.scss';
import { FaFacebookF, FaInstagram, FaYoutube} from "react-icons/fa";
import { Link } from 'react-router-dom';
import call from '../../assets/footer/calling.png';
import time from '../../assets/footer/time.png';
import location from '../../assets/footer/location.png';

const Footer = () => {

    const footerMenu = [
        {
            'name' : 'About Us',
            'link' : '/'
        },
        {
            'name' : 'Dental Services',
            'link' : '/'
        },
        {
            'name' : 'Dentist',
            'link' : '/'
        },
        {
            'name' : 'Blogs',
            'link' : '/'
        }
    ];

    const footerContacts = [
        {
            'title': 'Phone Number',
            'info': '9845117800',
            'icon': call
        },
        {
            'title': 'Open Hour',
            'info': '10:00 AM - 21:00 PM',
            'icon': time
        },
        {
            'title': 'Clinic Address',
            'info': '1147 I st floor, Kempegowda Road, Sachidananda Nagar, BEML 3rd STAGE, Rajarajeshwari Nagar, Bengaluru, Karnataka 560098',
            'icon': location
        }
    ]

    return (
        <footer className='pt-100 pb-70'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-5">
                        <div className="footer-logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <p>Best Dental clinic in RRNagar, Bengaluru.</p>

                        <div className="social-logo">
                            <p>Follow us on</p>
                            <ul>
                                <li><a href="https://www.facebook.com/share/1FvtX2WaxW/"target="_blank" rel="noopener noreferrer"><FaFacebookF/></a></li>
                                <li><a href="https://youtube.com/@thecornerstonedental?si=cqOBt_TBf6z_DrCn" target="_blank" rel="noopener noreferrer"><FaYoutube/></a></li>
                                <li><a href="https://www.instagram.com/the_cornerstone_dental?igsh=MTR4aTkzMXZ1a3ppNQ==" target="_blank" rel="noopener noreferrer"><FaInstagram/></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2">
                        <div className="footer-link">
                            <p>Quick Links</p>
                            <ul>
                                {
                                    footerMenu.map(singleMenu => <li><Link to="/">{singleMenu.name}</Link></li>)
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-5">
                        <div className="footer-contact">
                            <p>Contact & Information</p>

                            {
                                footerContacts.map(footerContact => {
                                    return  <div className="contact-list">
                                                <div className="contact-icon">
                                                    <img src={footerContact.icon} alt="call" />
                                                </div>
                                                <div className="contact-text">
                                                    <p>{footerContact.title}</p>
                                                    <h6>{footerContact.info}</h6>
                                                </div>
                                            </div>
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <div className='copy-text'>
                        <p>&copy; The Cornerstone Dental. All Right Reserved</p>
                    </div>  
                    <div className='copy-links'>
                        <ul>
                            <li><Link to='/'>Terms of Use</Link></li>
                            <li><Link to='/'>Privacy Policy</Link></li>
                        </ul>
                    </div>                          
                </div>
            </div>
        </footer>
    );
};

export default Footer;