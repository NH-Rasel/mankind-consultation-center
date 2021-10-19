import React from 'react';
import { useParams } from 'react-router';

const ConsultantDetails = () => {
    const { consultantsDbId } = useParams();
    return (
        <div>
            <h2>this is id {consultantsDbId}</h2>
        </div>
    );
};

export default ConsultantDetails;