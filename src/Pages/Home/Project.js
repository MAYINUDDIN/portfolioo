import React from 'react';
import { NavLink } from 'react-router-dom';
import p from '../../assets/img/p1.png'
import p1 from '../../assets/img/p2.png'
import p2 from '../../assets/img/p3.png'
import p3 from '../../assets/img/p4.png'
import p4 from '../../assets/img/p5.png'
const Project = () => {
    return (
        <div className=' p-3 mb-3'>
            <h1 class="lg:text-3xl font-bold drop-shadow lg:mt-12 text-primary">MY PROJECTS</h1>
            <div className='grid px-6 lg:px-20 grid-col-4 lg:grid-cols-3 gap-3 m-3 justify-center  mt-5 mb-5 flex justify-center'>
                <div class="card bordered rounded w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-56 w-96' src={p} alt="" /></figure>
                    <div class="card-body">
                        <h2 class="font-bold text-lg  drop-shadow ">
                            ICAS Internation Responsive Website

                        </h2>
                        <p className='text-justify'>They are working in different sectors based on the standards as well as requirements. We offer strategic guidance to companies and implement their supply chain program to carry out industry-level benchmarking within the leading companies.
                        </p>

                        <div class=" flex  justify-center">
                            <button className='btn text-white btn-primary btn-sm rounded px-6 mt-2 ' >
                                <a href="http://icas-intl.com/" target='_blank'>Live Link</a> </button>

                            <button className='btn text-white btn-primary btn-sm rounded px-6 mt-2 ml-3 ' >
                                <a href="https://github.com/MAYINUDDIN/Icas-International" target='_blank'> Github Link</a></button>


                        </div>
                    </div>
                </div>

                <div class="card bordered rounded w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-56 w-96' src={p1} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="font-bold text-lg  drop-shadow ">
                            Fareast Islami life  Website
                        </h2>
                        <p className='text-justify'>A leading third generation company in the insurance sector, Fareast Islami Life Insurance Comapny Limited started its journey on May 29, 2000 and obtained Certificate of Incorporation and Certificate of Commencement of Business on May 29, 2000 as a Public Limited Company</p>

                        <div class=" flex  justify-center">
                            <button className='btn text-white btn-primary btn-sm rounded px-6 mt-2 ' >
                                <a href="https://fareastt.netlify.app/" target='_blank'>Live Link</a> </button>

                            <button className='btn text-white btn-primary btn-sm rounded px-6 mt-2 ml-3 ' >
                                <a href="https://github.com/MAYINUDDIN/FILIC" target='_blank'> Github Link</a></button>

                        </div>
                    </div>
                </div>

                <div class="card bordered rounded w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-56 w-96' src={p2} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="font-bold text-lg  drop-shadow ">
                            My Money Bank

                        </h2>
                        <p className='text-justify'> I can develop full stack web application using
                            MongoDB, Express, React and Node. with authentication features like JWT,admin role,
                            payment system,etc</p>

                        <div class=" flex  justify-center">
                            <button className='btn text-white btn-primary btn-sm rounded px-6 mt-2 ' >
                                <a href="https://mainu-bank.netlify.app/" target='_blank'>Live Link</a> </button>

                            <button className='btn text-white btn-primary btn-sm rounded px-6 mt-2 ml-3 ' >
                                <a href="https://github.com/MAYINUDDIN/My_bank" target='_blank'> Github Link</a></button>

                        </div>


                    </div>

                </div>



            </div>
            <div className='justify-center mb-4'>
                <button className='btn btn-primary btn-sm text-white  px-24 rounded'> <NavLink to='projects'>All Projects</NavLink> </button>
            </div>


        </div >
    );
};

export default Project;