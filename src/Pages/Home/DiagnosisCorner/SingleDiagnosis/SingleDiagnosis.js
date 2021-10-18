import React from 'react';
import './SingleDiagnosis.css';

const SingleDiagnosis = ({ singleDiagnosis }) => {
    const { test, img, price } = singleDiagnosis;
    return (
        <div className="col-12 col-md-6 col-lg-4 diagnosis gx-3 my-3 py-3">
            <img style={{ width: '200px', borderRadius: '5px' }} src={img} alt="" />
            <div>
                <h3>{test}</h3>
                <h4>${price}</h4>
                <button className="btn btn-dark">Test this in lab</button>
            </div>
        </div>
    );
};

export default SingleDiagnosis;