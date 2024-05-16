import React from 'react';

const Footer = () => {
    return (
        <footer className="container">
            <div className="bg-[#0f0e17] text-[#73747e] py-4 mt-2 rounded-t-md text-center">
                <p className="text-center text-sm font-comforta font-medium leading-[120%] italic capitalize">
                    Created by{' '}
                    <a
                        href="https://www.instagram.com/akmal.15_/"
                        target="_blank"
                        className="text-[#73747e] font-allura font-bold tracking-wide"
                    >
                        Akmal (bento)
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
