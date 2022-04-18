import { FC } from 'react'
import { IconTypes } from './IconTypes'
import { GetIcon } from './GetIcon'
import { BaseIconProps } from './BaseIcon'

export interface IconLookupProps extends BaseIconProps {
  name: IconTypes
}

export const IconLookup: FC<IconLookupProps> = (props) => GetIcon(props)
