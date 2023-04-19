/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    important: true,
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}'
    ],
    darkMode: 'class',
    theme: {
        extend: {},
        screens: {
            sm: '380px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        colors: {
            'main-color': '#EB5E28',
            'main-dark': '#252422',
            'main-white': '#FFFCF2',
            'main-brown': '#403D39',
            'main-brown-light': '#CCC5B9',
            'red': '#DF5F5F'
        },
        fontFamily: {
            sans: ['Poppins', 'sans-serif'],
            heading: ['Quicksand', 'sans-serif'],
        }
    },
    plugins: [],
}

