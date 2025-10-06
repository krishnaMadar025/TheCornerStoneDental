import React from 'react';
import './Team.scss';
import imgOne from '../../assets/about/team/DrJeevanadam.jpeg';
import imgTwo from '../../assets/about/team/DrShruti.jpeg';
const Team = () => {

    const teams = [
        {
            'img': imgOne,
            'name': 'Dr Jeevanandam'
        },
        {
            'img': imgTwo,
            'name': 'Dr Shruti'
        }
    ]


    return (
        <section className='team-section pt-100' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <span>Meet our Team</span>
                    </div>

                </div>

                <div className="row">
                    {
                        teams.map (team => 
                            <div className="col-lg-3 col-sm-6">
                                <div className="team-card">
                                    <div className="team-img">
                                        <img src={team.img} alt="" />
                                    </div>
                                    <h3>{team.name}</h3>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Team;