import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{html,ts}", "./**/*.html",],
  theme: {
    extend: {},
  },
  plugins: [],
  mode: 'jit',
}

export default config;
