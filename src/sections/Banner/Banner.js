import React from 'react';
import './Banner.scss';
import {Link} from 'react-router-dom';
import icon from '../../assets/banner/icons/Calling.png';
import bannerImg from '../../assets/banner/1.png';
import doctorImg from '../../assets/banner/doctor.png';
import DrJeevanandamImg from '../../assets/banner/DrJeevanandam.png';
import DrShrutiImg from '../../assets/banner/DrShruti.png';
import bannerPattern from '../../assets/banner/pattern_02.png';
import shapeOne from '../../assets/banner/vector_01.png';
import shapeTwo from '../../assets/banner/vector_02.png';
import shapeThree from '../../assets/banner/vector_03.png';
import shapeFour from '../../assets/banner/pattern.png';

const Banner = () => {

    return (
        <section className='section-bg section-common banner-section'>
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="banner-text" data-aos="fade-up" data-aos-duration="2000">
                                    <h1>Crafting Confident Smiles</h1>
                                    <p>Blending expertise, comfort, and modern technology to bring out the best in your smile.</p>

                                    <div className="banner-bottom">
                                        <div className="theme-btn">
                                            <Link to="/contact">Book an appointment</Link>
                                        </div>

                                        <div className="banner-call">
                                            <div className='icon'>
                                                <img src={icon} alt="icon" />
                                            </div>
                                            <div className='call-text'>
                                                <p>Contact Us</p>
                                                <h6>+91 9845117800</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="banner-img-area" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
                                    <div className="banner-img">
                                        <img src={bannerImg} alt="banner model" />
                                    </div>
                                    <div className='info-box1'>
                                        <div className="info-img">
                                            <img src={DrJeevanandamImg} alt="doctor" />
                                        </div>
                                        <div className='info-text'>
                                            <p>Dr. Jeevanandam S.</p>
                                            <p><small>Mirco-Endodontist and Aesthetic Dentist</small></p>
                                        </div>
                                    </div>  
                                     <div className='info-box'>
                                        <div className="info-img">
                                            <img src={DrShrutiImg} alt="doctor" />
                                        </div>
                                        <div className='info-text'>
                                            <p>Dr. Shruti</p>
                                            <p><small>Chief Dental Surgeon</small></p>
                                        </div>
                                    </div>  
                                    {/* Vector Shapes */}
                                    <div className="shapes">
                                        <img src={shapeOne} alt="shape" />
                                        <img src={shapeTwo} alt="shape" />
                                        <img src={shapeThree} alt="shape" />
                                        <img src={shapeFour} alt="shape" />
                                    </div>
                                </div>
                            </div>
                             
                        </div>
                    </div>
                </div>
            </div>

            {/* Banner Pattern Vector*/}
            <img className='banner-pattern' src={bannerPattern} alt="banner pattern" />
        </section>
    );
};

export default Banner;