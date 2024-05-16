/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            animation: {
                fadeToTop: 'fadeToTop 1s ease-out',
            },
            keyframes: {
                fadeToTop: {
                    '0%': {
                        opacity: '1',
                        transform: 'translateY(0px)',
                    },
                    '100%': {
                        opacity: '0',
                        transform: 'translateY(-100px)',
                    },
                },
            },
        },
        fontFamily: {
            allura: ['Allura', 'cursive'],
            comforta: ['Comfortaa', 'sans-serif'],
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
        },
        container: {
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                md: '3rem',
                lg: '4rem',
                xl: '5rem',
            },
        },
    },
    plugins: [require('daisyui')],
};
