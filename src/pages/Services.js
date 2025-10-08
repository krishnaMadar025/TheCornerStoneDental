import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../sections/Footer/Footer';
import Appointment from '../sections/Appointment/Appointment';
import Service from '../sections/Services/Services';

const Services = () => {
    return (
        <>
            <Navbar />
            <Service />
            <Appointment />
            <Footer />
        </>
    );
};

export default Services;