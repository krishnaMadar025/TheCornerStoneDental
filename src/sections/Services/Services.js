import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Services.scss';
import ServicesData from './ServiceData';
import Service from '../../components/Service/Service';
//import { Link } from 'react-router-dom';
//import { BsFillArrowRightCircleFill } from "react-icons/bs";


const Services = () => {
    return (
        <section className='service-section pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row">
                   
                        <SectionTitle subTitle="Our Services"/>
                   
                    
                </div>

                <div className="row">
                    {
                        ServicesData.map(singleService => <Service serviceList={singleService}/>)
                    }
                </div>
            </div>

           { /*<div className="services-link text-center">
                <Link to='/'>
                    View all service list
                    <BsFillArrowRightCircleFill/>
                </Link>
            </div>*/}
        </section>
    );
};

export default Services;