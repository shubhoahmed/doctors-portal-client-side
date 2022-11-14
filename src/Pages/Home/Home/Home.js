import React from 'react';
import Banner from '../Banner/Banner';
import Exception from '../Exception/Exception';
import InfoCards from '../InfoCard/InfoCards';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Exception></Exception>
            <MakeAppoinment></MakeAppoinment>
        </div>
    );
};

export default Home;