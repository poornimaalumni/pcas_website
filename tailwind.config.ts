import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        "med-xl": "560",
      },
      screens: {
        xs: { min: "344px", max: "700px" },
        'md:max-lg': { min: '768px', max: '1023px' },
        md: "767px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
} satisfies Config;
