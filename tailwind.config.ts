import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "icon-delete": "url('/src/assets/icons8-lixeira-24.png')",
      },
      width: {
        "85": "22rem",
        "18": "6.5rem",
        "9/10": '90%',
      },
      height: {
        "9/10": '90%',
      },
      spacing: {
        '22': '5.6rem',
      }
    },
  },
  plugins: [],
};
export default config;
