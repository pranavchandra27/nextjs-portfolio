module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class"], // or 'media' or 'class'
  theme: {
    extend: {
      animate: ["hover", "focus"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
