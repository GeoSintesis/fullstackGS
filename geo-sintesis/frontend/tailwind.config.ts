import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A4B7A',    // Azul profundo
        secondary: '#2A9D8F',  // Verde turquesa
        accent: '#26C4D9',     // Celeste claro
        muted: '#6C757D',      // Gris sobrio
        teal: colors.teal,
        cyan: colors.cyan,
        rose: colors.rose,
      },
      fontFamily: {
        sans: ['var(--font-poppins)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
