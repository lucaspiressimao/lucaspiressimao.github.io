import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./lib/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050816",
        panel: "#0A1024",
        panelSoft: "#111935",
        line: "rgba(148, 163, 184, 0.18)",
        accent: "#7DD3FC",
        accentStrong: "#22D3EE",
        success: "#34D399",
        ember: "#F59E0B",
        violet: "#818CF8",
      },
      fontFamily: {
        sans: ["Space Grotesk", "Manrope", "Segoe UI", "sans-serif"],
        mono: ["JetBrains Mono", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(125, 211, 252, 0.08), 0 32px 80px rgba(5, 8, 22, 0.65)",
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at center, rgba(125, 211, 252, 0.16) 0, rgba(125, 211, 252, 0) 46%), linear-gradient(rgba(125, 211, 252, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(125, 211, 252, 0.06) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
