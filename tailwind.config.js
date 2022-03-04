module.exports = {
  content: ["./src/**/*.{html,js}", "./dist/**/*.{html,js}", "*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        '8xl': "90rem"
      },
      colors: {
        primary: "#FFAD00",
        green: "#00A78D",
        white: '#ffffff',
  
        'black': "#000",

        'gray': '#C4C4C4',
        'dark-gray': "#53565A",
        
        'gray-border': "#DDDDDE",
        'gray-background': "#EEEDED",
        "darked-background": "rgba(0, 0, 0, 0.6)",
      },
      fontSize: {
        'even-smaller': '.5rem',
        'bit-smaller': '.65rem',
      },
    },
    fontFamily: {
      sans: ["Scala Sans"],
    },
  },
  plugins: [],
}
