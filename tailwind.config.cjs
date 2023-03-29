/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  themes: [
    {
      mytheme: {

        "primary": "#67d9ea",

        "secondary": "#1aaf67",

        "accent": "#f1ff96",

        "neutral": "#1E1E2F",

        "base-100": "#335166",

        "info": "#99BFF0",

        "success": "#128776",

        "warning": "#B87614",

        "error": "#FB1A0E",
      },
    },
  ],
  plugins: [require("daisyui")],
}
