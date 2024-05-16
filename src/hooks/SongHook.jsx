import React from 'react';
import Song from '../assets/song/song.mp3';

export const SongHook = () => {
    let audio = new Audio(Song);

    const handlePlay = () => {
        if (audio.paused === true) {
            // console.log('hit play');
            audio.play();
            audio.volume = 0.5;
        } else {
            // console.log('hit pause');
            audio.pause();
            // audio.currentTime = 0;
        }
    };

    return [handlePlay];
};
