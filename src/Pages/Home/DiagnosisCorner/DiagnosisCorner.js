import React, { useEffect, useState } from 'react';
import SingleDiagnosis from './SingleDiagnosis/SingleDiagnosis';

const DiagnosisCorner = () => {
    const [diagnosis, setDiagnosis] = useState([]);
    useEffect(() => {
        fetch('diagnosisDb.json')
            .then(res => res.json())
            .then(data => setDiagnosis(data))
    }, [])
    return (
        <div id="diagnosisCorner" className="container">
            <h2 className="mt-5 fw-bolder text-danger">---Our Diagnosis Tests---</h2>
            <div className="row m-4">
                {
                    diagnosis.map(singleDiagnosis => <SingleDiagnosis
                        key={singleDiagnosis.id}
                        singleDiagnosis={singleDiagnosis}
                    ></SingleDiagnosis>)
                }
            </div>
        </div>
    );
};

export default DiagnosisCorner;