import React, { useEffect } from 'react';
import PlaceCard from './PlaceCard';

import Ring from '../../../assets/image/wedding-ring.png';
import Dinner from '../../../assets/image/dinner-table.png';

import ZV_3 from '../../../assets/image/zv-3.jpg';
import ZV_2 from '../../../assets/image/zv-2.jpg';
import Vec_3 from '../../../assets/image/vector-3.png';

import Aos from 'aos';
import 'aos/dist/aos.css';
import CountDown from './CountDown';

const WaktuTempat = () => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    });

    return (
        <section className="container">
            <div className="relative bg-[#0f0e17] flex flex-col justify-center items-center py-6">
                <div className="text-center flex flex-col justify-center items-center">
                    <h1
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        className="font-comforta text-2xl font-bold leading-[120%] tracking-wider text-[#fffffe]"
                    >
                        We'r Getting Merried
                    </h1>

                    <h1
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        className="w-[280px] font-allura text-xl font-reguler leading-[120%] tracking-wider text-[#fffffe] mt-8"
                    >
                        Assalamualaikum Warrohmatullah Wabarrakatuh
                    </h1>

                    <p
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        className="mt-8 font-comforta text-sm font-medium leading-[120%] text-[#a7a9be] italic w-[350px]"
                    >
                        By asking for the grace and blessing of Allah SWT. We
                        intend to hold a wedding celebration for our sons and
                        daughters, which Allah SWT willing will be held on:
                    </p>

                    <p
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        className="mt-8 font-comforta text-xl font-medium leading-[120%] text-[#a7a9be]"
                    >
                        24 June 2024
                    </p>
                </div>

                <CountDown targetDate="2024-06-24T00:00:00" />

                {/* <div className="mt-12 flex justify-center gap-4">
                    <div
                        data-aos="flip-down"
                        data-aos-duration="1000"
                        className="bg-[#2e2f3e] flex flex-col justify-center items-center gap-5 px-5 py-4 rounded-lg"
                    >
                        <span className="font-comforta font-medium text-2xl leading-[120%] text-[#fffffe]">
                            20
                        </span>

                        <span className="font-comforta font-medium text-xl leading-[120%] text-[#fffffe]">
                            D
                        </span>
                    </div>

                    <div
                        data-aos="flip-down"
                        data-aos-duration="1500"
                        className="bg-[#2e2f3e] flex flex-col justify-center items-center gap-5 px-5 py-4 rounded-lg"
                    >
                        <span className="font-comforta font-medium text-2xl leading-[120%] text-[#fffffe]">
                            09
                        </span>

                        <span className="font-comforta font-medium text-xl leading-[120%] text-[#fffffe]">
                            H
                        </span>
                    </div>

                    <div
                        data-aos="flip-down"
                        data-aos-duration="2000"
                        className="bg-[#2e2f3e] flex flex-col justify-center items-center gap-5 px-5 py-4 rounded-lg"
                    >
                        <span className="font-comforta font-medium text-2xl leading-[120%] text-[#fffffe]">
                            60
                        </span>

                        <span className="font-comforta font-medium text-xl leading-[120%] text-[#fffffe]">
                            M
                        </span>
                    </div>

                    <div
                        data-aos="flip-down"
                        data-aos-duration="2500"
                        className="bg-[#2e2f3e] flex flex-col justify-center items-center gap-5 px-5 py-4 rounded-lg"
                    >
                        <span className="font-comforta font-medium text-2xl leading-[120%] text-[#fffffe]">
                            10
                        </span>

                        <span className="font-comforta font-medium text-xl leading-[120%] text-[#fffffe]">
                            S
                        </span>
                    </div>
                </div> */}

                <div
                    data-aos="zoom-in-up"
                    data-aos-duration="1000"
                    className="mt-20"
                >
                    <a
                        href="https://www.google.com/calendar/render?action=TEMPLATE&text=Wedding+Zv+and+Lala&details=Merupakan+suatau+kehormatan+bagi+kami+apabila+Bapak%2FIbu%2F+Saudara%2FI+berkenan+hadir+dan+memberikan+do%E2%80%99a+restu+kepada+kedua+mempelai.+Atas+kehadiran+dan+do%3Ba+restunya+kami+ucapkan+termakasih.&location=Jln.Tengah+.Kp.+Ragamukti+Rt+02%2F02+Desa+Citayam+Kecamatan+Tajurhalang+Kab.+Bogor&dates=20240624T010000Z%2F20240624T160000Z"
                        className="border border-[#fffffe] p-5 rounded-xl hover:bg-[#fffffe] transition-all duration-500 group"
                        target="_blank"
                    >
                        <span className="font-comforta text-base font-semibold leading-[120%] text-[#fffffe] group-hover:text-[#0f0e17] transition-all duration-500">
                            Add to Calendar
                        </span>
                    </a>
                </div>

                <div className="mt-20 flex flex-col justify-center items-center gap-6">
                    <PlaceCard image={ZV_3} icon={Ring}>
                        <PlaceCard.BodyContent>
                            <h1 className="text-[#fffffe] font-comforta text-2xl font-bold">
                                Wedding Ceremony
                            </h1>

                            <h2 className="text-[#fffffe] font-comforta text-lg">
                                Saturday, 20 April 2024
                            </h2>

                            <p className="text-[#fffffe] font-comforta text-sm font-medium capitalize">
                                at the bride's residence
                            </p>
                        </PlaceCard.BodyContent>
                    </PlaceCard>
                    <PlaceCard image={ZV_2} icon={Dinner}>
                        <PlaceCard.BodyContent>
                            <h1 className="text-[#fffffe] font-comforta text-2xl font-bold">
                                Wedding Party
                            </h1>

                            <h2 className="text-[#fffffe] font-comforta text-lg">
                                Monday, 24 June 2024
                            </h2>

                            <h2 className="text-[#fffffe] font-comforta text-sm font-bold">
                                10.00 WIB - Finished
                            </h2>

                            <p className="text-[#fffffe] font-comforta text-sm font-medium capitalize">
                                Jln. Tengah Kp. Ragamukti Rt 02/02 Desa Citayam
                                Kecamatan Tajurhalang Kab. Bogor
                            </p>
                        </PlaceCard.BodyContent>
                    </PlaceCard>
                </div>

                {/* <div className="mt-5 ">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d700.8468232462936!2d106.73974906144022!3d-6.446867342127621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e8136b26596f%3A0xbaadcc4d3e5c0807!2sMI%20Sirojulatfhal!5e0!3m2!1sid!2sid!4v1715767553774!5m2!1sid!2sid"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-[333px] h-[300px] rounded-xl"
                    ></iframe>
                </div> */}

                <div
                    className="mt-20"
                    data-aos="zoom-out"
                    data-aos-duration="1000"
                >
                    <img src={Vec_3} alt="" />
                </div>
            </div>
        </section>
    );
};

export default WaktuTempat;
