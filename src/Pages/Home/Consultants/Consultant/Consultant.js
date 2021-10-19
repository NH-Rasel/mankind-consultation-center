import React from 'react';
import { Link } from 'react-router-dom';
import './Consultant.css';

const Consultant = ({ consultant }) => {
    const { id, name, img, designation, specialist, hospital } = consultant;
    return (
        <div className="col-12 col-md-6 col-lg-4 consultant my-3 py-3">
            <img style={{ width: '200px', borderRadius: '150px' }} src={img} alt="" />
            <h3>{name}</h3>
            <p>{specialist}</p>
            <p>{designation}</p><p>{hospital}</p>
            <Link to={`/consultantDetails/${id}`}><button className="btn btn-dark">Get Appointment</button></Link>
        </div>
    );
};

export default Consultant;