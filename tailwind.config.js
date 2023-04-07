/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}'
    ],
    darkMode: 'class',
    theme: {
        extend: {},
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        colors: {
            'main-color': '#6B9080',
            'main-light': '#A4C3B2',
            'main-lighter': '#CCE3DE',
            'main-white': '#EAF4F4',
            'white-grenish': '#F6FFF8',
            'main-dark': '#374A5B',
        },
        fontFamily: {
            sans: ['Poppins', 'sans-serif'],
            heading: ['Quicksand', 'sans-serif'],
        },
    },
    plugins: [],
}

