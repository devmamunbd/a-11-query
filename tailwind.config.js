/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"

  ],
  theme: {
    themes: ["light", "dark"],
  },
  plugins: [
    require('daisyui'),
    require('flowbite/plugin')
  ],
}