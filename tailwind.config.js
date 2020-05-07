const tailwindcss = require("tailwindcss");

module.exports = {
  purge: [],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: "Helvetica, Arial, sans-serif",
    },
    extend: {},
  },
  variants: {},
  plugins: [tailwindcss("./tailwind.js"), require("autoprefixer")],
};
