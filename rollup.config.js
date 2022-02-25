
export default [
  {
    input: 'src/main.js',
    output: [
      {
        file: 'dist/bundle.js',
        format: "umd"
      }
    ]
  },
  {
    input: 'src/scripts/carousel.js',
    output: [
      {
        file: 'dist/scripts/carousel.js',
        format: "umd"
      }
    ]
  },
]


/* 
  export default [
    {
      input: "src/main.js",
      output: {
        file: 'dist/bundle.js',
        format: "asm"
      },
    },
    {
      input: "src/scripts/carousel.js",
      output: {
        file: 'dist/scripts/carousel.js',
        format: "asm"
      },
    },
  ]
 */
