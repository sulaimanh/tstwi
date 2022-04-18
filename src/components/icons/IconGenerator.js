/*
    - This script will convert your svgs into its proper form.
    - It will generate the export file for the icons
    - It will generate the icon types file
    - It will generate the GetIcon file 
*/

const fs = require('fs')

// Path to the folder where you have your svg files
// Only .svg files are accepted
const pathToIcons = ''
const dir = fs.readdirSync(pathToIcons)

function toPascalCase(string) {
  return `${string}`
    .replace(new RegExp(/[-_]+/, 'g'), ' ')
    .replace(new RegExp(/[^\w\s]/, 'g'), '')
    .replace(
      new RegExp(/\s+(.)(\w*)/, 'g'),
      ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`,
    )
    .replace(new RegExp(/\w/), (s) => s.toUpperCase())
}

const toKebabCase = (string) =>
  string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()

const createSvgAndExportFiles = () => {
  dir.forEach((svg) => {
    if (svg.lastIndexOf('.svg') != -1) {
      const contents = fs
        .readFileSync(`${path}/${svg}`, { encoding: 'utf8', flag: 'r' })
        .toString()
      const beg = contents.indexOf('>') + 1
      const end = contents.lastIndexOf('/>') + 1
      const strPath = contents.slice(beg, end + 1)

      const endTitleIndex = svg.lastIndexOf('.')
      const title = toPascalCase(svg.slice(0, endTitleIndex))
      const content = `
      import React, { FC } from 'react'
      import { BaseIcon, BaseIconProps } from '../BaseIcon'

      export const ${title}: FC<BaseIconProps> = ({
        size,
        stroke,
        fill,
        className,
        onClick
      }) => (
        <BaseIcon
          viewBox='0 0 20 20'
          size={size}
          onClick={onClick}
          stroke={stroke}
          fill={fill}
          className={className}
        >
          ${strPath}
        </BaseIcon>
      )
      `

      fs.writeFileSync(`src/components/icons/allIcons/${title}.tsx`, content)
      fs.appendFileSync(
        'src/components/icons/allIcons/index.ts',
        `export { ${title} } from "./${title}"\n`,
      )
    }
  })
}

const createTypesFile = () => {
  const types = dir.map((svg) => {
    const endTitleIndex = svg.lastIndexOf('.')
    const types = toKebabCase(svg.slice(0, endTitleIndex))
    return types
  })
  let str = ``
  types.forEach((type) => {
    str = `"${type}" | ${str}`
  })
  str = str.substring(0, str.length - 7)
  str = `export type IconTypes = ${str} \n export type AllIconsType = IconTypes[]`
  fs.writeFileSync(`src/components/icons/IconTypes.ts`, str)
}

const createGetIconFile = () => {
  const caseStatements = dir.map((svg) => {
    const endTitleIndex = svg.lastIndexOf('.')
    const title = toPascalCase(svg.slice(0, endTitleIndex))
    const type = toKebabCase(svg.slice(0, endTitleIndex))
    const caseStatement = `case "${type}":
      return (
        <Icons.${title}
          size={size}
          stroke={stroke}
          fill={fill}
          className={className}
          onClick={onClick}
        />
      );`
    return caseStatement
  })

  caseStatements.shift()

  const str = caseStatements
    .reduce((prev, curr) => {
      return `${prev}\n${curr}`
    }, 'switch (name) {\n')
    .concat(`\n default: throw new Error("Noop");`)

  const fin = `
  import React, { FC } from 'react'
  import * as Icons from './allIcons'
  import { IconLookupProps } from "./iconLookup"

  export const GetIcon: FC<IconLookupProps> = ({
    name, size, stroke, fill, className, onClick
  }) => {
    ${str}
  }
};
  `

  fs.writeFileSync('src/components/icons/getIcon.tsx', fin)
}

function run() {
  createSvgAndExportFiles()
  createTypesFile()
  createGetIconFile()
}

// run()
