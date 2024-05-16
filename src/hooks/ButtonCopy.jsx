import React, { useState } from 'react';
import { FaRegCopy } from 'react-icons/fa';

const ButtonCopy = (props) => {
    const { textToCopy } = props;

    const [copySuccess, setCopySuccess] = useState('');

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setCopySuccess('Copied!');
        } catch (err) {
            setCopySuccess('Failed!');
        }

        setTimeout(() => {
            setCopySuccess('');
        }, 2000);
    };

    return (
        <>
            <button
                onClick={handleCopy}
                className="border border-[#a7a9be] rounded-xl px-4 py-2 hover:bg-[#a7a9be] transition-all duration-500 group"
            >
                <span className="font-comforta text-[#a7a9be] capitalize group-hover:text-[#0f0e17] transition-all duration-500">
                    {copySuccess || (
                        <div className="flex justify-center items-center gap-2 ">
                            <FaRegCopy className="text-lg" /> copy no rek
                        </div>
                    )}
                </span>
            </button>
        </>
    );
};

export default ButtonCopy;
