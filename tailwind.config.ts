import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        espresso: "#241713",
        cream: "#F7F1E8",
        gold: "#B89A61",
        burgundy: "#641E2B",
        charcoal: "#242424",
        paper: "#FBF7F1",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px -30px rgba(36,23,19,0.25)",
        card: "0 12px 40px -24px rgba(36,23,19,0.22)",
      },
    },
  },
  plugins: [],
};
export default config;
