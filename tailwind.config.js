const tailwindcss = require("tailwindcss");

module.exports = {
  purge: [],
  theme: {
    container: {
      center: true,
    },

    fontFamily: {
      sans: "Open Sans Condensed, sans-serif",
    },
    extend: {
      height: {
        72: "18rem",
        80: "20rem",
      },
      button: {
        default: "uppercase",
      },
    },
  },
  variants: {},
  plugins: [tailwindcss("./tailwind.js"), require("autoprefixer")],
};
