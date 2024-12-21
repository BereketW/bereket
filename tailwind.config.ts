import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: "#FFFFFF",
        "very-light-gray": "#F5F5F5",
        "light-gray": "#DCDCDC",
        "medium-gray": "#C0C0C0",
        "dark-gray": "#A9A9A9",
      },
    },
  },
  plugins: [],
} satisfies Config;
