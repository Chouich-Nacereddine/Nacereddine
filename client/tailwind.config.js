/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "home-bg-img": "url('/assets/ffff.png')",
      }),
      backgroundSize: {
        60: "70%",
      },
      backgroundPosition: {
        "right-19vh": "50vw 9vh",
      },
      // Add more customizations as needed
    },
  },

  plugins: [],
};
