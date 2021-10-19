import React from 'react';
import Banner from '../Banner/Banner';
import Consultants from '../Consultants/Consultants';
import Covid19 from '../Covid19/Covid19';
import DiagnosisCorner from '../DiagnosisCorner/DiagnosisCorner';
import Pharmacy from '../Pharmacy/Pharmacy';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Consultants></Consultants>
            <DiagnosisCorner></DiagnosisCorner>
            <Pharmacy></Pharmacy>
            <Covid19></Covid19>
        </div>
    );
};

export default Home;