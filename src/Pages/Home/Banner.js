import React from 'react';
import me from '../../assets/img/me.png';
const Banner = () => {
    return (
        <div class="hero min-h-screen py-0">
            <div class="hero-content flex-col lg:flex-row-reverse lg:px-16">
                <img src={me} class=" lg:max-w-sm rounded-lg w-96" />
                <div>
                    <h1 class=" lg:text-4xl font-bold text-left uppercase drop-shadow">Hi!  I am Mayin Uddin</h1>
                    <p className='text-left  lg:ml-24 text-lg font-bold drop-shadow'> <span className='text-primary'>MERN Stack Web Developer</span>  </p>
                    <p class="py-4 mr-4 text-left text-justify ">All praise is due to Allah. A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities </p>
                    <div className='sm:text-center lg:text-left'>
                        <button class="btn btn-primary rounded text-lg  px-16 text-white ">HIRE ME</button>

                    </div>
                </div>
            </div>



        </div>
    );
};

export default Banner;