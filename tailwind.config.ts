import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 6s linear infinite'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "bg-light-gray": "#B0B0B0",
        "bg-dark-gray": "18181B",
        "bg-pink": "#F33C94",
        "bg-purple": "#9D4EDD",
        "bg-dark-purple": "#5A189A",
        "bg-purple-blue": "#7873FA",
        "bg-green": "#2AAC51"
      },
      colors: {
        "light-gray": "#B0B0B0",
        "dark-gray": "18181B",
        "pink": "#F33C94",
        "purple": "#9D4EDD",
        "dark-purple": "#5A189A",
        "purple-blue": "#7873FA",
        "green": "#2AAC51"
      }
    },
  },
  plugins: [],
};
export default config;
