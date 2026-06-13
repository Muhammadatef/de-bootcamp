import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0a0a0f",
          surface: "#0d0d1a",
          elevated: "#0d1117",
        },
        border: {
          subtle: "#1e293b",
          DEFAULT: "#2d3748",
        },
        cyan: {
          DEFAULT: "#00d4ff",
        },
        violet: {
          DEFAULT: "#a78bfa",
        },
        amber: {
          DEFAULT: "#f59e0b",
        },
        red: {
          DEFAULT: "#f43f5e",
        },
        green: {
          DEFAULT: "#34d399",
        },
        text: {
          primary: "#e2e8f0",
          secondary: "#94a3b8",
          muted: "#64748b",
          faint: "#334155",
        },
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
        arabic: ["var(--font-noto-kufi)", "sans-serif"],
      },
      fontSize: {
        hero: ["clamp(40px, 7vw, 80px)", { lineHeight: "1.1", fontWeight: "700" }],
        h1: ["clamp(32px, 5vw, 56px)", { lineHeight: "1.15", fontWeight: "700" }],
        h2: ["clamp(24px, 3.5vw, 40px)", { lineHeight: "1.2", fontWeight: "700" }],
        h3: ["clamp(18px, 2.5vw, 28px)", { lineHeight: "1.3", fontWeight: "600" }],
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        "cyan-glow": "0 0 20px #00d4ff44",
      },
      keyframes: {
        "pulse-ring": {
          "0%": { boxShadow: "0 0 0 0 rgba(0, 212, 255, 0.4)" },
          "100%": { boxShadow: "0 0 0 12px rgba(0, 212, 255, 0)" },
        },
      },
      animation: {
        "pulse-ring": "pulse-ring 2s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
