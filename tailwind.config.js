module.exports = {
  content: ["./src/**/*.{html,js}", "./dist/**/*.{html,js}", "*.{html,js}"],
  theme: {
    fontSize: {
      'even-smaller': '.5rem',
      'bit-smaller': '.65rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    colors: {
      primary: "#FFAD00",
      green: "#00A78D",
      white: '#ffffff',

      'black': "#000",
      'gray-border': "#DDDDDE",
      'gray-background': "#EEEDED",
      "darked-background": "rgba(0, 0, 0, 0.6)",
    },
    fontFamily: {
      body: ["Scala Sans"],
    },
  },
  plugins: [],
}
