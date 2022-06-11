import React from 'react';
import about from '../../../src/assets/img/about.jpg'
const About = () => {
    return (
        <div class="hero">
            <div class="hero-content flex-col lg:flex-row lg:px-16">
                <img src={about} class="  lg:max-w-sm rounded-lg w-96 h-48 mt-5 hover:scale-75 duration-1000" />
                <div>
                    <h1 class="lg:text-3xl font-bold drop-shadow text-primary">ABOUT ME</h1>
                    <p class="py-4 px-12 text-lg text-justify">I am a MERN Stack Web developer with proficiency in
                        front-end technologies with React.js, Javascript, Bootstrap, Tailwind, Daisy UI with
                        Back-end technologies such as NodeJS and ExpressJS.
                        <br />
                        <span className='text-primary font-bold drop-shadow'>My Skills:</span> HTML, CSS, Javascript, Bootstrap, Tailwind, React.js, Node Js, Express Js, Firebase, MongoDB,
                        Mysql, Oracle, Android apps.
                    </p>

                    <h6 className='px-10'>  </h6>

                </div>
            </div>
        </div>
    );
};

export default About;