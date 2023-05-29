/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        "caskaydia": ["CaskaydiaCove Nerd Font Mono"],
      }
    },
  },

  plugins: [],
};

module.exports = config;
