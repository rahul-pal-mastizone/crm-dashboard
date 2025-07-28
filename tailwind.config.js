/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', // Scan index.html
    './src/**/*.{js,ts,jsx,tsx}', // Scan your React files in src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
