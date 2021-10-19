import React, { useEffect, useState } from 'react';
import Consultant from './Consultant/Consultant';


const Consultants = () => {
    const [consultants, setConsultants] = useState([])
    useEffect(() => {
        fetch('consultantsDb.json')
            .then(res => res.json())
            .then(data => setConsultants(data))
    }, [])
    return (
        <div id="consultants" className="container">
            <h2 className="mt-5 fw-bolder text-danger">---Our Consultation Panel---</h2>
            <div className="row m-4">
                {
                    consultants.map(consultant => <Consultant
                        key={consultant.id}
                        consultant={consultant}
                    ></Consultant>)
                }
            </div>
        </div>
    );
};

export default Consultants;