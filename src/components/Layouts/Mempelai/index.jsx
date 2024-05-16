import React, { useEffect } from 'react';

import ZV from '../../../assets/image/zv.jpg';
import Lala from '../../../assets/image/lala.jpg';
import Vec_2 from '../../../assets/image/vector-2.png';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Mempelai = () => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    });

    return (
        <section className="container" id="target-scroll">
            <div className="relative bg-[#0f0e17] before:absolute before:-top-6 before:left-0 before:w-full before:h-10 before:bg-[#0f0e17] before:content-[''] before:rounded-t-lg before:z-2">
                <div className="flex flex-col justify-center items-center pt-8 pb-4">
                    <h1
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        className="font-comforta text-2xl text-[#fffffe] font-bold leading-[120%] w-[300px] text-center"
                    >
                        Meet The Happy Couple
                    </h1>

                    <p
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        className="mt-6 font-comforta text-sm text-[#a7a9be] font-light leading-[120%] w-[300px] text-center italic"
                    >
                        Glory be to Allah SWT who has created creatures in
                        pairs. Ya Allah, please accept and bless us
                    </p>

                    <div className="py-8 flex flex-col justify-center items-center">
                        <div className="flex flex-col justify-center items-center text-center">
                            <img
                                src={ZV}
                                alt=". . ."
                                className="w-[150px] h-[150px] object-cover object-center rounded-full"
                                data-aos="flip-left"
                                data-aos-duration="1000"
                            />

                            <div
                                className="mt-5"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                            >
                                <h1 className="font-allura text-4xl text-[#fffffe] leading-[120%]">
                                    Muhammad Ridwan
                                </h1>

                                <span className="font-comforta text-sm text-[#a7a9be] font-bold leading-[120%] italic mt-1">
                                    Putra kedua
                                </span>
                                <h3 className="font-comforta text-sm text-[#a7a9be] font-bold leading-[120%] italic mt-1">
                                    Bpk. Namun,S.Pd & Ibu Solihah,S.Pd.I,M.Pd
                                </h3>
                            </div>
                        </div>

                        <div
                            className="relative flex items-center py-8"
                            data-aos="zoom-in-up"
                            data-aos-duration="1000"
                        >
                            {/* <div className="flex-grow bg-gray-400 h-px"></div> */}
                            <div className="mx-[55px] font-allura text-md text-[#a7a9be]">
                                And
                            </div>
                            {/* <div className="flex-grow bg-gray-400 h-px"></div> */}
                            <div className="absolute top-1/2 left-24 transform -translate-y-1/2 w-full h-px bg-[#a7a9be]"></div>
                            <div className="absolute top-1/2 right-24 transform -translate-y-1/2 w-full h-px bg-[#a7a9be]"></div>
                        </div>

                        <div className="flex flex-col justify-center items-center text-center">
                            <img
                                src={Lala}
                                alt=". . ."
                                className="w-[150px] h-[150px] object-cover object-center rounded-full"
                                data-aos="flip-left"
                                data-aos-duration="1000"
                            />

                            <div
                                className="mt-5"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                            >
                                <h1 className="font-allura text-4xl text-[#fffffe] leading-[120%]">
                                    Siti Jamilah Yofari
                                </h1>

                                <span className="font-comforta text-sm text-[#a7a9be] font-bold leading-[120%] italic mt-1">
                                    Putri ketiga
                                </span>
                                <h3 className="font-comforta text-sm text-[#a7a9be] font-bold leading-[120%] italic mt-1">
                                    Bpk. Mediyanto Soetjahyono & Ibu Farida
                                </h3>
                            </div>
                        </div>

                        <div
                            className="mt-20"
                            data-aos="zoom-out"
                            data-aos-duration="1000"
                        >
                            <img src={Vec_2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mempelai;
