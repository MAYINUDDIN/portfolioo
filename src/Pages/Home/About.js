import React from 'react';
import about from '../../../src/assets/img/about.jpg'
const About = () => {
    return (
        <div class="hero">
            <div class="hero-content flex-col lg:flex-row lg:px-16">
                <img src={about} class="  lg:max-w-sm rounded-lg w-96" />
                <div>
                    <h1 class="lg:text-3xl font-bold drop-shadow text-primary">ABOUT ME</h1>
                    <p class="py-6 px-12 text-justify">I am a MERN Stack Web developer with proficiency in
                        front-end technologies with React.js, Javascript, Bootstrap, Tailwind, Daisy UI with
                        Back-end technologies such as NodeJS and ExpressJS </p>
                    <div className='text-center lg:text-left px-12'>
                        <button class="btn btn-primary text-white  rounded">RECENT PROJECTS</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;