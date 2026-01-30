/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'work-sans': ['var(--font-work-sans)', 'Work Sans', 'sans-serif'],
      },
      colors: {
        'bg-primary': '#09313C',
        'text-primary': '#FFFFFF',
        'text-secondary': 'rgba(255, 255, 255, 0.75)',
        'highlight-primary': '#C6FC05',
        'highlight-secondary': '#4CE3AC',
        'text-on-highlight': '#082E3D',
      },
      rotate: {
        'skew-light': '2deg',
        'skew-light-neg': '-2deg',
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: ["cupcake", "luxury","cyberpunk"], // 
  },
};