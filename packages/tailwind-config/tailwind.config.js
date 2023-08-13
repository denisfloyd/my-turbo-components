import colors from "tailwindcss/colors";

export default {
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx,mdx}`,
    // include packages if not transpiling
    // "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue[500],
        secondary: colors.red[500],
        warning: colors.yellow[500],
        textColor: colors.slate[900],
      },
    },
  },
  plugins: [],
  darkMode: ["class", '[data-mode="dark"]'],
};
