import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Appointment from '../sections/Appointment/Appointment';
import Banner from '../sections/Banner/Banner';
import Expert from '../sections/Expert/Expert';
import Features from '../sections/Features/Features';
import Footer from '../sections/Footer/Footer';
import Team from '../sections/Team/Team';
import Services from '../sections/Services/ServicesHome';
import Testimonial from '../sections/Testimonial/Testimonial';

const Home = () => {

    return (
        <>
            <Navbar/>
            <Banner/>
            <Services/>           
            <Features />
            <Expert/>
            <Team/>
            <Testimonial/>
            <Appointment/>
            <Footer/>
        </>
    );
};

export default Home;