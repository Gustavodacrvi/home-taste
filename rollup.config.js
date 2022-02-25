
import { terser } from "rollup-plugin-terser"

export default [
  {
    input: 'src/main.js',
    plugins: [terser()],
    output: [
      {
        file: 'dist/bundle.js',
        format: "umd"
      }
    ]
  },
  {
    input: 'src/scripts/carousel.js',
    plugins: [terser()],
    output: [
      {
        file: 'dist/scripts/carousel.js',
        format: "umd"
      }
    ]
  },
]
