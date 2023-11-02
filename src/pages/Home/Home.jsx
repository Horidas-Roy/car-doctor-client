import React from 'react';
import Banner from './Banner';
import About from './About';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <h2>This is Home</h2>
            <Banner></Banner>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;