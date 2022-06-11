import React from 'react';
import { NavLink } from 'react-router-dom';
import resume from '../../assets/resume.pdf'
const Navbar = () => {
    return (

        <div className=''>
            <div class=" navbar bg-primary lg:px-32">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white font-bold" fill="none" viewBox="0 0 28 28" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='ml-1'><NavLink to='/'>HOME</NavLink></li>
                            <li className='ml-1'><NavLink to='about-details'>ABOUT ME</NavLink></li>
                            <li className='ml-1'> <NavLink to='service'>SERVICES</NavLink></li>
                            <li className='ml-1'><a>BLOGS</a></li>
                            <li className='ml-1'><NavLink to='contact-me'>CONTACT ME</NavLink></li>
                        </ul>
                    </div>
                    <a class="normal-case text-lg  lg:text-2xl text-white drop-shadow-lg 
                    hover:scale-75 duration-1000"> <NavLink to='/'>MAYIN UDDIN</NavLink></a>
                </div>
                <div class="navbar-center hidden lg:flex drop-shadow-lg ">
                    <ul class="menu menu-horizontal text-white text-md p-0">
                        <li className='ml-64'><NavLink to='/'>HOME</NavLink></li>
                        <li className='ml-2'><NavLink to='about-details'>ABOUT ME</NavLink></li>
                        <li className='ml-2'> <NavLink to='service'>SERVICES</NavLink></li>
                        <li className='ml-2'><a>BLOGS</a></li>
                        <li className='ml-2'><NavLink to='contact-me'>CONTACT ME</NavLink></li>
                    </ul>
                </div>
                <div class="navbar-end mr-12">
                    <a href={resume} target='_blank' class="btn btn-secondary text-white bordered border-0 rounded lg:px-8 font-bold drop-shadow bg-[#002171] hover:btn-primary text-white  ">MY Resume</a>
                </div>
            </div>
        </div>

    );
};

export default Navbar;