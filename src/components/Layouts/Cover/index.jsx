import React, { useEffect, useState } from 'react';
import { IoMdMail } from 'react-icons/io';

import BG_1 from '../../../assets/image/wed-bg.jpg';
import Vector_1 from '../../../assets/image/vector-1.png';
import { buttonHook } from '../../../hooks/buttonHook';

// import Aos from 'aos';
// import 'aos/dist/aos.css';

const Cover = () => {
    const [Button, visible, HandleButton, scroll] = buttonHook();

    const queryParams = new URLSearchParams(window.location.search);
    const nama = queryParams.get('to');

    // useEffect(() => {
    //     Aos.init();
    //     Aos.refresh();
    // }, []);

    document.body.style.overflow = scroll;

    return (
        <>
            <div
                className={`flex justify-center items-center h-screen w-full z-50 top-0 pointer-events-none fixed ${visible} ${
                    Button ? 'animate-fadeToTop opacity-0' : ''
                }`}
            >
                <div className="relative w-full h-full">
                    <img
                        src={BG_1}
                        alt=". . ."
                        className="w-full h-full object-cover object-center blur-[3px] brightness-50"
                    />
                    <img
                        src={Vector_1}
                        alt=". . ."
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] lg:w-[400px]"
                    />

                    <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                        <h1 className="text-4xl lg:text-5xl font-semibold text-white font-allura tracking-widest py-8 lg:py-12 ">
                            ZV & Lala
                        </h1>
                        <h3 className="text-xs lg:text-sm font-light text-white italic font-comforta w-[250px] lg:w-[300px]">
                            KPD YTH BAPAK/IBU/SAUDARA/I
                        </h3>
                        <h3 className="text-xl lg:text-xl font-bold text-white font-comforta mt-2 mb-6 capitalize">
                            {nama ? nama : ''}
                        </h3>

                        <button
                            className="pointer-events-auto border border-white rounded-xl px-5 py-3 group hover:bg-white transition-all duration-300 animate-pulse hover:animate-none"
                            onClick={HandleButton}
                        >
                            <div className="flex items-center gap-2">
                                <IoMdMail className="w-5 h-5 text-white group-hover:text-black" />
                                <span className="text-white font-comforta font-medium text-sm group-hover:text-black">
                                    Open Invitation
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cover;
