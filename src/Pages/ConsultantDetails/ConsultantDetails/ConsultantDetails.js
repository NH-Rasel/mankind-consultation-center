import React from 'react';
import { useParams } from 'react-router';

const ConsultantDetails = () => {
    const { consultantsDbId } = useParams();
    return (
        <div>
            <div>
                <h2>{consultantsDbId}</h2>
            </div>
        </div>
    );
};

export default ConsultantDetails;