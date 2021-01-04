const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "rpc-dark": "hsl(229, 25%, 31%)",
        "rpc-blue-dark": "hsl(237, 49%, 15%)",
        "rpc-dark-shadow": "#0000005e",
        "rpc-blue": "hsl(214, 47%, 23%)",
        "rpc-blue-light": "hsl(229, 64%, 46%)",
        "rpc-red": "hsl(349, 71%, 52%)",
        "rpc-red-light": "hsl(349, 70%, 56%)",
        "rpc-banana": "hsl(39, 89%, 49%)",
        "rpc-banana-light": "hsl(40, 84%, 53%)",
        "rpc-sky": "hsl(230, 89%, 62%)",
        "rpc-sky-light": "hsl(230, 89%, 65%)",
        "rpc-shadow": "rgb(187, 191, 212)",
      },
      backgroundImage: theme => ({
        "board": "url('./images/bg-triangle.svg')"
      }),
      spacing: {
        "33": "8.2rem"
      }
    },
    fontFamily: {
      sans: [
        "Barlow Semi Condensed",
        ...defaultTheme.fontFamily.sans
      ]
    },
    borderWidth: {
      "15": "15px",
      ...defaultTheme.borderWidth
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
