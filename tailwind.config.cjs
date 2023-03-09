/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        fontFamily: {
            mono: ['Major Mono Display', 'monospace'],
            serif: ['Zilla Slab', 'sans-serif'],
        },
        extend: {
            animation: {
                gradient: 'gradient 15s ease infinite',
                grow: 'grow 7s infinite',
            },
            keyframes: {
                gradient: {
                    '0%': {
                        'background-position': '0% 50%',
                    },
                    '50%': {
                        'background-position': '100% 50%',
                    },
                    '100%': {
                        'background-position': '0% 50%',
                    },
                },
                grow: {
                    '0%': {
                        transform: 'scale(1)',
                    },
                    '50%': {
                        transform: 'scale(1.2)',
                    },
                    '100%': {
                        transform: 'scale(1)',
                    },
                },
            },
        },
    },
    plugins: [],
};
