import React, { useEffect } from 'react';
import ZL from '../../../assets/image/zv-1.jpg';

import { GoDotFill } from 'react-icons/go';
import { TbChevronsDown } from 'react-icons/tb';
import { buttonHook } from '../../../hooks/buttonHook';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    const [targetRef, scrollToTarget] = buttonHook();

    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    return (
        <section className="pointer-events-none">
            <div className="w-full h-screen flex justify-center items-center">
                <div className="relative w-full h-full">
                    <img
                        src={ZL}
                        alt=". . ."
                        className="w-full h-full object-cover object-center blur-[1.3px] brightness-50"
                    />

                    <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                        <div
                            className="w-[350px] flex flex-col gap-4"
                            data-aos="fade-up"
                        >
                            <h2 className="font-comforta text-base text-white font-bold leading-[120%]">
                                Ya Allah the most loving
                            </h2>
                            <h3 className="font-comforta text-sm text-[#E6E6E6] font-medium leading-[120%]">
                                With Your blessing, you brought us together in a
                                holy marriage bond
                            </h3>
                        </div>

                        <div className="mt-14" data-aos="fade-up">
                            <h3 className="font-comforta text-xl text-white font-bold leading-[120%]">
                                THE WEDDING OF
                            </h3>

                            <div className="mt-[60px] mb-16 relative">
                                <h1 className="font-allura text-5xl text-white leading-[120%]">
                                    ZV & Lala
                                </h1>
                            </div>

                            <h3 className="font-comforta text-xl text-white font-light leading-[120%] inline-flex">
                                <GoDotFill className="mr-5" />
                                24 06 2024
                                <GoDotFill className="ml-5" />
                            </h3>
                        </div>

                        <p className="mt-12 pointer-events-auto flex justify-center flex-col items-center animate-pulse">
                            <TbChevronsDown className="text-[#fffffe] text-3xl animate-bounce" />
                            scroll
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
