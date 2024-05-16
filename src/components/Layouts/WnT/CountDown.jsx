import React, { useEffect, useState } from 'react';

const CountDown = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            timeLeft = {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className="mt-12 flex justify-center gap-4">
            <div
                data-aos="flip-down"
                data-aos-duration="1000"
                className="bg-[#2e2f3e] flex flex-col justify-center items-center gap-5 px-5 py-4 rounded-lg"
            >
                <span className="font-comforta font-medium text-2xl leading-[120%] text-[#fffffe]">
                    {timeLeft.days}
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
                    {timeLeft.hours}
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
                    {timeLeft.minutes}
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
                    {timeLeft.seconds}
                </span>

                <span className="font-comforta font-medium text-xl leading-[120%] text-[#fffffe]">
                    S
                </span>
            </div>
        </div>
    );
};

export default CountDown;
