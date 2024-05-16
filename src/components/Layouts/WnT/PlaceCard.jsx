import React, { useEffect } from 'react';

import { SiGooglemaps } from 'react-icons/si';

import Aos from 'aos';
import 'aos/dist/aos.css';

const PlaceCard = (props) => {
    const { children, image, icon } = props;

    useEffect(() => {
        Aos.init();
        Aos.refresh();
    });

    return (
        <section>
            <div
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                className="relative w-[333px] "
            >
                <img
                    src={image}
                    alt=". . . "
                    className="w-full h-full object-cover object-center rounded-xl brightness-[.45] blur-[1.2px] border border-[#636363] "
                />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[270px] h-[333px] ">
                    <div className="flex flex-col justify-center items-center text-center gap-4">
                        <img src={icon} alt=". . ." />

                        {children}

                        <a
                            href="https://maps.app.goo.gl/t3j1kqMCXBCvorEp9"
                            className="border border-[#fffffe] py-3 px-5 rounded-xl hover:bg-[#fffffe] transition-all duration-500 group mt-4"
                            target="_blank"
                        >
                            <span className="font-comforta text-base font-semibold leading-[120%] text-[#fffffe] group-hover:text-[#0f0e17] transition-all duration-500 inline-flex justify-center items-center gap-2 pt-1">
                                <SiGooglemaps className="text-lg animate-bounce" />
                                Open Maps
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

const BodyContent = (props) => {
    const { title, children } = props;
    return <>{children}</>;
};

PlaceCard.BodyContent = BodyContent;

export default PlaceCard;
