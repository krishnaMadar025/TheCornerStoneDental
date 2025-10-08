import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import AboutBanner from '../sections/AboutBanner/AboutBanner';
import Gallery from '../sections/Gallery/Gallery';
import Safety from '../sections/Safety/Safety';
import Team from '../sections/Team/Team';
import Footer from '../sections/Footer/Footer';

const About = () => {
    return (
        <>
            <Navbar />
            <AboutBanner /> 
            <Gallery />      
            <Safety />
            <Team />
            <Footer />
        </>
    );
};

export default About;