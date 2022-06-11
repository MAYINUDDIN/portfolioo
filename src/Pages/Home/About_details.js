import React from 'react';
import me from '../../assets/img/me.png';
import service from '../../assets/img/service1.jpg'
import service1 from '../../assets/img/service2.jpg'
import service2 from '../../assets/img/service3.jpg'
import service3 from '../../assets/img/firebase.png'
import service4 from '../../assets/img/bootstrap.jpg'
import service5 from '../../assets/img/javascript.jpg'
const About_details = () => {
    return (

        <div>


            <div class="hero">
                <div class="hero-content flex-col lg:flex-row lg:px-16">
                    <img src={me} class="  lg:max-w-sm rounded-lg w-64" />
                    <div>
                        <h1 class="lg:text-3xl font-bold drop-shadow text-primary">ABOUT ME</h1>
                        <p class="py-6 px-12 text-lg drop-shadow text-justify">I am a MERN Stack Web developer with proficiency in
                            front-end technologies with React.js, Javascript, Bootstrap, Tailwind, Daisy UI with
                            Back-end technologies such as NodeJS and ExpressJS. I am expert in android apps development using Java, Mysql, Oracle. I have 4 years experience in android apps development. </p>

                    </div>
                </div>

            </div>

            <h1 class="lg:text-3xl font-bold drop-shadow lg:mt-5 text-primary">MY SKILLS</h1>
            <div className='grid px-6 lg:px-24 grid-col-4 lg:grid-cols-6 gap-4 m-3 justify-center  mt-5 mb-5 flex justify-center'>

                <img className='h-36 shadow hover:scale-125 duration-1000' src={service} alt="" />
                <img className='h-36 shadow hover:scale-125 duration-1000' src={service1} alt="" />
                <img className='h-36 shadow hover:scale-125 duration-1000' src={service2} alt="" />
                <img className='h-36 shadow hover:scale-125 duration-1000' src={service3} alt="" />
                <img className='h-36 shadow hover:scale-125 duration-1000' src={service4} alt="" />
                <img className='h-36 shadow hover:scale-125 duration-1000' src={service5} alt="" />

            </div>

        </div>




    );
};

export default About_details;