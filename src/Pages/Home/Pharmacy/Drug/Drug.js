import React from 'react';
import './Drug.css';

const Drug = ({ drug }) => {
    const { name, price, quantity } = drug;
    return (
        <div className="col-12 col-md-6 col-lg-3 p-4 drug">
            <img className="rounded-3 img-fluid" src="https://i.ibb.co/pKzZ7Tb/drug.png" alt="" />
            <h3>{name}</h3>
            <p>Quantity:{quantity}</p>
            <h4>Price: ${price}</h4>
            <button className="btn btn-dark">Buy Now</button>
        </div>
    );
};

export default Drug;