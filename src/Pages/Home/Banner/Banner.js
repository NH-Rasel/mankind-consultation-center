import React from 'react';
import banner from '../../../images/banner.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <img className="img-fluid" src={banner} alt="" />
            <div className="title">
                <h1 className="fw-bolder m-5 text-dark">Mankind Consultation Center</h1>
                <p className="m-5 text-dark">Get the best treatment from our expert consultants and get well. We have the best diagnosis and laboratory technician for analyzing diseases. </p>
            </div>
        </div>
    );
};

export default Banner;