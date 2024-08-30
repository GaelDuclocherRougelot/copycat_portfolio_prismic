import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        grayCaption: "var(--caption-grey)",
      },
      fontFamily: {
        primary: ["var(--font-primary)"],
        caption: ["var(--font-caption)"],
      },
      fontSize: {
        'sm-responsive': 'clamp(1rem, 1rem, 2vw + 1.3rem)',
        'lg-responsive': 'clamp(1.5rem, 3vw + 1rem, 2.5rem)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "slide-down": {
          "0%": { transform: "translateY(-150%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "slide-down-infinite": {
          "0%": { transform: "translateY(-50%)", opacity: "0" },
          "50%": { transform: "translateY(50%)", opacity: "1" },
          "100%": { transform: "translateY(100%)", opacity: "0" },
        },
      },
      animation: {
        "slide-down": "slide-down 0.5s linear",
        "slide-down-infinite": "slide-down-infinite 3s linear infinite",

      },
    },
  },
  plugins: [],
};
export default config;
