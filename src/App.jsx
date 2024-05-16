import { useEffect, useState } from 'react';
import Cover from './components/Layouts/Cover';
import Home from './components/Layouts/Home';
import Mempelai from './components/Layouts/Mempelai';
import WaktuTempat from './components/Layouts/WnT';
import Gift from './components/Layouts/AnG';
import Comment from './components/Layouts/Comment';
import ButtonSong from './components/Elements/ButtonSong';
import Footer from './components/Layouts/Footer';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);

    return (
        <>
            {isLoading ? (
                <div className="flex space-x-2 justify-center items-center bg-white h-screen dark:invert">
                    <span className="sr-only">Loading...</span>
                    <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="h-8 w-8 bg-black rounded-full animate-bounce"></div>
                </div>
            ) : (
                <section className="relative bg-black overflow-hidden">
                    <Cover />
                    <Home />
                    <Mempelai />
                    <WaktuTempat />
                    <Gift />
                    <Comment />
                    <Footer />
                    {/* <ButtonSong /> */}
                </section>
            )}
        </>
    );
}

export default App;
