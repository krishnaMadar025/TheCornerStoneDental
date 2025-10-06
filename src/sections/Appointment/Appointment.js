import React from 'react';
import './Appointment.scss';
import {AiFillHome} from "react-icons/ai";
import ContactForm from '../../components/ContactForm/ContactForm';

const Appointment = () => {

    const mapLink = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.7127745099247!2d77.51817181079126!3d12.914986445623923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3fab984c1869%3A0x3cb19d384cee98e0!2sWG7C%2BX6X%2C%20Rajarajeshwari%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560098!5e0!3m2!1sen!2sin!4v1759477944896!5m2!1sen!2sin'


    return (
        <section className='appointment-section pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <div className="google-map">
                            <iframe title='map' src={mapLink}></iframe>

                            <div className="location-name">
                                <AiFillHome />
                                <p>1147 I st floor, Kempegowda Road, Sachidananda Nagar, BEML 3rd STAGE, Rajarajeshwari Nagar, Bengaluru, Karnataka 560098</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6">
                        <div className="appointment-form-area">
                            <div className='section-title'>
                                <span>BOOK APPOINTMENT</span>
                                <h5>From routine check-ups to advanced treatments, we’ve got you covered  at The Cornerstone Dental</h5>                                
                            </div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;