const tailwindcss = require("tailwindcss");

module.exports = {
  purge: [],
  theme: {
    container: {
      center: true,
      button: {
        default: "uppercase",
      },
    },
    height: {
      72: "18rem",
      80: "20rem",
    },
    button: {
      default: "uppercase",
    },

    fontFamily: {
      sans: "Open Sans Condensed, sans-serif",
    },
    extend: {},
  },
  variants: {},
  plugins: [tailwindcss("./tailwind.js"), require("autoprefixer")],
};
