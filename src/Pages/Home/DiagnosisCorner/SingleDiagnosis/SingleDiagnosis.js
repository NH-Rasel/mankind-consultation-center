import React from 'react';
import { Link } from 'react-router-dom';
import './SingleDiagnosis.css';

const SingleDiagnosis = ({ singleDiagnosis }) => {
    const { id, test, img, price } = singleDiagnosis;
    return (
        <div className="col-12 col-md-6 col-lg-4 diagnosis my-3 py-3">
            <img style={{ width: '200px', borderRadius: '5px' }} src={img} alt="" />
            <div>
                <h3>{test}</h3>
                <h4>${price}</h4>
                <Link to={`/diagnosisDetails/${id}`}><button className="btn btn-dark">Test this in lab</button></Link>
            </div>
        </div>
    );
};

export default SingleDiagnosis;