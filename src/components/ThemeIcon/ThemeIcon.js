import React from 'react';
import './ThemeIcon.scss';

const ThemeIcon = ({ icon }) => {
    return (
        // <div className='icon-box'>
        <img 
            src={icon} 
            alt="icon" 
            style={{ borderRadius: 'inherit' }} 
        />
        // </div>
    );
};

export default ThemeIcon;
