import React from 'react';
import { useParams } from 'react-router';

const DiagnosisDetails = () => {
    const { diagnosisDbId } = useParams();
    return (
        <div>
            <h2>{diagnosisDbId}</h2>
        </div>
    );
};

export default DiagnosisDetails;