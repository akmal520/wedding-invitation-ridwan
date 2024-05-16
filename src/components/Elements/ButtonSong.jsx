import React from 'react';

import { IoMdPlay } from 'react-icons/io';

import { SongHook } from '../../hooks/SongHook';
const ButtonSong = () => {
    const [handlePlay] = SongHook();

    return (
        <div className="fixed bottom-0 right-0 -translate-x-1/2 -translate-y-1/2">
            <button
                onClick={handlePlay}
                className="p-3 bg-[#0f0e17] rounded-full flex justify-center items-center text-center border border-[#fffffe]"
            >
                <IoMdPlay className="text-[#fffffe] pl-[2px] h-6 w-6" />
            </button>
        </div>
    );
};

export default ButtonSong;
