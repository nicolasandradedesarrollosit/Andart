import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        blue: {
          '50': '#e8f5ff',
          '100': '#d5ecff',
          '200': '#b3daff',
          '300': '#85bfff',
          '400': '#5695ff',
          '500': '#2f6cff',
          '600': '#0c3cff',
          '700': '#0433ff',
          '800': '#062ecd',
          '900': '#10319f',
          '950': '#0a1b5c',
        },
      },
      backgroundImage: {
        'hero-pattern': "url('/andart_banner.jpg')",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui({
    themes: {
      light: {
        colors: {
          primary: {
            DEFAULT: "#0070F3",
            foreground: "#ffffff",
          },
          foreground: {
            DEFAULT: "#9ca3af",
          }
        },
      },
      dark: {
        colors: {
          primary: {
            DEFAULT: "#0070F3",
            foreground: "#ffffff",
          },
          foreground: {
            DEFAULT: "#9ca3af",
          }
        },
      },
    },
  })],
}
