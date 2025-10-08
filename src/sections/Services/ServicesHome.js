import React from 'react';
import './Services.scss';
import ServicesData from './ServiceData';
import Service from '../../components/Service/Service';
import { Link } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from "react-icons/bs";


const Services = () => {
    return (
        <section className='service-section pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row">
                   
                   <span>Our Services</span>
                    
                </div>

                <div className="row">
                    {
                        ServicesData.slice(0, 4).map(singleService => <Service serviceList={singleService}/>)
                    }
                </div>
            </div>

           <div className="services-link text-center">
                <Link to='/singleservice'>
                    View all service list
                    <BsFillArrowRightCircleFill/>
                </Link>
            </div>
        </section>
    );
};

export default Services;