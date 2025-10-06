import React from 'react';
import './Expert.scss';
import { BsFillCheckCircleFill } from "react-icons/bs";
import expertImg from '../../assets/Expert.jpeg';

const Expert = () => {
    return (
        <section className='expert-section' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="expert-text">
                            
                           <span>EXPERTS IN DENTAL</span>
                           <h5>Excellence is our goal, and we provide expert care to protect and enhance your precious smile.</h5>
                            <ul>
                                <li>
                                    <BsFillCheckCircleFill />
                                    Top-Notch Expertise
                                </li>
                                <li>
                                    <BsFillCheckCircleFill />
                                    Advanced Technology
                                </li>
                                <li>
                                    <BsFillCheckCircleFill />
                                    Latest Materials
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="expert-img">
                            <img src={expertImg} alt="expert" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expert;