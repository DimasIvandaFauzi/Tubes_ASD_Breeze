import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            animation: {
              marquee: 'marquee 30s linear infinite',
              marquee2: 'marquee2 30s linear infinite',
              marqueeReverse: 'marqueeReverse 30s linear infinite',
              marquee2Reverse: 'marquee2Reverse 30s linear infinite',
            },
            keyframes: {
              marquee: {
                '0%': { transform: 'translateX(0%)' },
                '100%': { transform: 'translateX(-100%)' },
              },
              marquee2: {
                '0%': { transform: 'translateX(100%)' },
                '100%': { transform: 'translateX(0%)' },
              },
              marqueeReverse: {
                '0%': { transform: 'translateX(-100%)' },
                '100%': { transform: 'translateX(0%)' },
              },
              marquee2Reverse: {
                '0%': { transform: 'translateX(0%)' },
                '100%': { transform: 'translateX(100%)' },
              },
          },
        },
    },

    plugins: [
      require('tailwind-scrollbar'),
    ],
};
