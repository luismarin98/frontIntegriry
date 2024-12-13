/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: () => ({
        'fondo-bg': "url('/src/img/BG_fondo.jpg')",
        'logo-bg': "url('/src/img/gb_logo.jpg')",
      })
    },
  },
  plugins: [],
}