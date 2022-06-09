import React from 'react';
import service from '../../assets/img/service1.jpg'
import service1 from '../../assets/img/service2.jpg'
import service2 from '../../assets/img/service3.jpg'

const Services = () => {
    return (
        <div className=''>
            <h1 class="lg:text-3xl font-bold drop-shadow lg:mt-12 text-primary">SERVICES</h1>
            <div className='grid px-6 lg:px-24 grid-col-4 lg:grid-cols-3 gap-3 m-3 justify-center  mt-5 mb-5 flex justify-center'>
                <div class="card bordered rounded w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-56 w-96' src={service} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="font-bold text-lg  drop-shadow ">
                            Plain Html CSS Javascript Website

                        </h2>
                        <p className='text-justify'> I can develop pixel perfect fully responsive website with HTML CSS and Javascript from provided figma design</p>

                        <div class=" flex  justify-center">
                            <button className='btn text-white btn-primary btn-sm rounded px-6 mt-2 ' >HTML</button>
                            <button className='btn text-white btn-primary btn-sm rounded px-6 mt-2 ml-3 ' >CSS</button>
                            <button className='btn text-white btn-primary btn-sm bordered  rounded px-6 mt-2 ml-3 ' >JAVASCRIPT</button>

                        </div>
                    </div>
                </div>

                <div class="card bordered rounded w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-56 w-96' src={service1} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="font-bold text-lg  drop-shadow ">
                            React  Responsive Material Design

                        </h2>
                        <p className='text-justify'> I can develop fast and fully responsive single page
                            React web apps with protected routing, authentication etc.</p>

                        <div class=" flex  justify-center">
                            <button className='btn btn-primary text-white btn-sm rounded px-6 mt-2 ' >Javascript</button>
                            <button className='btn btn-primary text-white btn-sm rounded px-6 mt-2 ml-3 ' >React</button>
                            <button className='btn text-white  btn-primary btn-sm bordered  rounded px-6 mt-2 ml-3 ' >Firebase</button>

                        </div>
                    </div>
                </div>

                <div class="card bordered rounded w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-56 w-96' src={service2} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="font-bold text-lg  drop-shadow ">
                            MERN Stack Web Application

                        </h2>
                        <p className='text-justify'> I can develop full stack web application using
                            MongoDB, Express, React and Node. with authentication features like JWT,admin role,
                            payment system,etc</p>

                        <div class=" flex  justify-center">
                            <button className='btn btn-primary text-white btn-sm rounded px-2 mt-2 ' >MOngoDB</button>
                            <button className='btn btn-primary text-white btn-sm rounded px-2 mt-2 ml-3 ' >Express and Node</button>
                            <button className='btn text-white  btn-primary btn-sm bordered  rounded px-6 mt-2 ml-3 ' >React</button>

                        </div>
                    </div>
                </div>

            </div>


        </div >
    );
};

export default Services;