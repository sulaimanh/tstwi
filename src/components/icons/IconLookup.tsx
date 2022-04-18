import { FC } from 'react'
import { IconTypes } from './IconTypes'
import { GetIcon } from './GetIcon'

export interface IconLookupProps {
  name: IconTypes
  size?: string
  stroke?: `stroke-${string}-${number}`
  fill?: `fill-${string}-${number}` | 'fill-black' | 'fill-white'
  className?: string
  onClick?: () => void
  children?: any
}

export const IconLookup: FC<IconLookupProps> = (props) => GetIcon(props)
