const tailwindcss = require("tailwindcss");
module.exports = {
  theme: {
    container: {
      padding: "10rem",
    },
  },
  plugins: [tailwindcss("./tailwind.js"), require("autoprefixer")],
};
