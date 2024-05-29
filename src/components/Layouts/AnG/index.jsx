import React, { useEffect } from 'react';
import Vec_3 from '../../../assets/image/vector-3.png';

import { FaGift } from 'react-icons/fa';
import ButtonCopy from '../../../hooks/ButtonCopy';

import Aos from 'aos';
import 'aos/dist/aos.css';
const Gift = () => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    });

    return (
        <section className="container">
            <div className="relative bg-[#0f0e17] flex flex-col justify-center items-center py-6">
                <div
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    className="text-center w-[340px]"
                >
                    <p className="font-comforta text-sm font-medium leading-[150%] text-[#a7a9be] italic">
                        "And among His verses is that He has created for you
                        wives of your own kind, so that you may feel comfortable
                        in them, and He has made between you mawaddah and mercy.
                        Verily in that are signs for the people who think"
                    </p>
                    <p className="font-comforta text-sm font-bold leading-[150%] text-[#a7a9be] mt-3">
                        - AR-RUM 21 -
                    </p>
                </div>

                <div
                    className="mt-8"
                    data-aos="zoom-out"
                    data-aos-duration="1000"
                >
                    <img src={Vec_3} alt="" />
                </div>

                <div className="text-center w-[340px] mt-8 flex flex-col justify-center items-center">
                    <h1
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        className="font-comforta font-bold text-2xl leading-[120%] text-[#fffffe]"
                    >
                        Give a Gift
                    </h1>

                    <p
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        className="font-allura text-xl font-medium leading-[150%] tracking-wide text-[#a7a9be] mt-8"
                    >
                        Your Prayer of Blessing is a very meaningful gift to us.
                    </p>

                    <p
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        className="font-comforta text-sm font-light leading-[150%] text-[#a7a9be] mt-8"
                    >
                        And if giving is an expression of your love, you can
                        give a gift by sending a digital envelope.
                    </p>

                    <div
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        className="flex flex-col justify-center items-center gap-8 w-full p-8 mt-8 bg-[#2e2f3e] rounded-xl"
                    >
                        <FaGift className="text-[#fffffe] text-5xl" />

                        <div className="flex flex-col justify-center items-center gap-3">
                            <h2 className="font-comforta font-bold text-[#a7a9be] text-xl">
                                Dana - 081287262773
                            </h2>
                            <h1 className="font-comforta font-bold text-[#a7a9be] text-lg mb-2">
                                Muhammad Ridwan
                            </h1>
                            <ButtonCopy textToCopy="081287262773" />
                        </div>

                        <div className="w-full h-[1px] bg-[#6f707e]"></div>

                        <div className="flex flex-col justify-center items-center gap-3">
                            <h2 className="font-comforta font-bold text-[#a7a9be] text-xl">
                                BRI - xxxxxxxxxx
                            </h2>
                            <h1 className="font-comforta font-bold text-[#a7a9be] text-lg mb-2">
                                Siti Jamilah Yofari
                            </h1>
                            <ButtonCopy textToCopy="Rek Lala" />
                        </div>
                    </div>

                    <div
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        className="mt-20"
                    >
                        <img src={Vec_3} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gift;
