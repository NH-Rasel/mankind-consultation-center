import React from 'react';
import Banner from '../Banner/Banner';
import Consultants from '../Consultants/Consultants';
import DiagnosisCorner from '../DiagnosisCorner/DiagnosisCorner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Consultants></Consultants>
            <DiagnosisCorner></DiagnosisCorner>
        </div>
    );
};

export default Home;