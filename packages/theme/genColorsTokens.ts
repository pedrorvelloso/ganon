import { writeFile } from 'fs/promises'
import { resolve } from 'path'
import prettier from 'prettier'

import { colors, Colors } from './src/base/colors'

const PATH = resolve('src', 'base', 'colors.type.ts')

async function genColorsTokens(c: Colors) {
  const mapping: string[] = []

  Object.entries(c).forEach((color) => {
    if (typeof color[1] === 'object') {
      Object.keys(color[1]).forEach((subColor) =>
        mapping.push(`${color[0]}.${subColor}`),
      )
    } else {
      mapping.push(color[0])
    }
  })

  const content = `
  export type ColorsType = '${mapping.join("' | '")}'
  `

  const prettierConfig = await prettier.resolveConfig(process.cwd())

  const formated = prettier.format(content, {
    ...prettierConfig,
    parser: 'typescript',
  })

  console.log(formated)

  await writeFile(PATH, formated)
}

genColorsTokens(colors)
