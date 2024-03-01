/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      inset: {
        '8px': '8px',
        '430px': '430px',
      },
      height: theme => ({
        "screen/75": "75vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out',
      },
      transitionDuration: {
        DEFAULT: '400ms',
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
      },
      animation: {
        fade: 'fadeIn 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};
