module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      yellow: "#F6BD60",
      linen: "#F7EDE2",
      pink: "#F5CAC3",
      matcha: "#84A59D",
      coral: "#F28482",
      dark: "#302f32",
      hint: {
        1: "#707070",
        2: "#a0a0a0",
      },
      "low-contrast": "#2e2e2e",
    },
    fontFamily: {
      serif: ["Newsreader", "Noto Serif SC", "serif"],
      sans: ["Inter", "Noto Sans SC", "sans"],
      mono: ["monospace"],
    },
    fontSize: {
      sm: ["14px", "20px"],
      base: ["15px", "24px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
    },
  },
  plugins: [],
};
