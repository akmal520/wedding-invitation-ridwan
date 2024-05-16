import React, { createRef, useEffect, useRef, useState } from 'react';
import Song from '../assets/song/song.mp3';
import { SongHook } from './SongHook';
export const buttonHook = () => {
    const [Button, setButton] = useState(false);
    const [visible, setVisible] = useState('');
    const [scroll, setScroll] = useState('');

    const [handlePlay] = SongHook();

    let musik = new Audio(Song);

    useEffect(() => {
        if (Button) {
            setScroll('auto');
            setTimeout(() => {
                setVisible('hidden');
            }, 1000);
            // setVisible('hidden');
        } else {
            setScroll('hidden');
        }
    }, [Button]);

    const HandleButton = () => {
        if (!Button) {
            handlePlay();
            setButton(true);
            // setTimeout(() => {
            // }, 1000);
        }
    };

    return [Button, visible, HandleButton, scroll];
};
