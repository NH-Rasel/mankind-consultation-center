import React from 'react';
import './Consultant.css';

const Consultant = ({ consultant }) => {
    const { name, img, designation, specialist, hospital } = consultant;
    return (
        <div className="col-12 col-md-6 col-lg-4 consultant my-3 py-3">
            <img style={{ width: '200px', borderRadius: '150px' }} src={img} alt="" />
            <h3>{name}</h3>
            <p>{specialist}</p>
            <p>{designation}</p><p>{hospital}</p>
            <button className="btn btn-dark">Get Appointment</button>
        </div>
    );
};

export default Consultant;