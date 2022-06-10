import React from 'react';
import p from '../../assets/img/p1.png'
import p1 from '../../assets/img/p2.png'
import p2 from '../../assets/img/p3.png'
import p3 from '../../assets/img/p4.png'
import p4 from '../../assets/img/p5.png'
import p5 from '../../assets/img/p6.png'
const RecentProject = () => {
    return (
        <div>
            <h1 class="lg:text-3xl font-bold drop-shadow lg:mt-5 text-primary">RECENT PROJECTS</h1>

            <div className='grid px-6 lg:px-24 grid-col-4 lg:grid-cols-2 gap-3 m-3 justify-center  mt-5 mb-5 flex justify-center'>


                <div class="carousel w-full shadow-lg">
                    <div id="slide1" class="carousel-item relative w-full">
                        <img src={p} class="w-full" />
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" class="btn btn-sm btn-primary btn-circle">❮</a>
                            <a href="#slide1" class="btn btn-sm btn-primary btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" class="carousel-item relative w-full">
                        <img src={p1} class="w-full" />
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" class="btn btn-sm btn-primary btn-circle">❮</a>
                            <a href="#slide3" class="btn btn-sm btn-primary btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" class="carousel-item relative w-full">
                        <img src={p2} class="w-full" />
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" class="btn btn-sm btn-primary btn-circle">❮</a>
                            <a href="#slide3" class="btn btn-sm btn-primary btn-circle">❯</a>
                        </div>
                    </div>

                </div>

                <div class="carousel w-full shadow-lg">
                    <div id="slide4" class="carousel-item relative w-full">
                        <img src={p5} class="w-full" />
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" class="btn btn-sm btn-primary btn-circle">❮</a>
                            <a href="#slide5" class="btn btn-sm btn-primary btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide5" class="carousel-item relative w-full">
                        <img src={p4} class="w-full" />
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" class="btn btn-sm btn-primary btn-circle">❮</a>
                            <a href="#slide5" class="btn btn-sm btn-primary btn-circle">❯</a>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default RecentProject;