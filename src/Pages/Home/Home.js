import React from 'react';
import Footer from '../Footer';
import About from './About';
import Banner from './Banner';
import Project from './Project';
import RecentProject from './RecentProject';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Project></Project>
            <RecentProject></RecentProject>
            <Footer></Footer>
        </div>
    );
};

export default Home;