import React, { useEffect, useState } from 'react';
import Drug from './Drug/Drug';

const Pharmacy = () => {
    const [drugs, setDrugs] = useState([]);
    useEffect(() => {
        fetch('pharmacyDb.json')
            .then(res => res.json())
            .then(data => setDrugs(data))
    }, [])
    return (
        <div id="pharmacy" className="container">
            <h2 className="mt-5 pt-5 fw-bolder text-danger">---Pharmacy Corner---</h2>
            <div className="row mx-4 mt-5 mb-5">
                {
                    drugs.map(drug => <Drug
                        key={drug.id}
                        drug={drug}
                    ></Drug>)
                }
            </div>
        </div>
    );
};

export default Pharmacy;