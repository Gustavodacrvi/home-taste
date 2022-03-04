
import { terser } from "rollup-plugin-terser"

import { readdirSync } from "fs"
import path from "path"

let files = readdirSync(path.join(__dirname, './src/scripts'), { withFileTypes: true })

export default [
  {
    input: 'src/create-vue-components.js',
    plugins: [terser()],
    output: [
      {
        file: 'dist/create-vue-components.js',
        format: "umd"
      }
    ]
  },
  ...files.map(item => item.name.split(".")[0]).map(scriptName => ({
    input: `src/scripts/${scriptName}.js`,
    plugins: [terser()],
    output: [
      {
        file: `dist/scripts/${scriptName}.js`,
        format: "umd"
      }
    ]
  })),
]
