import React, { FC } from 'react'
import { BaseIcon, BaseIconProps } from '../BaseIcon'

export const HourGlass: FC<BaseIconProps> = ({
  size,
  stroke,
  fill,
  className,
  onClick,
}) => (
  <BaseIcon
    viewBox="0 0 20 20"
    size={size}
    onClick={onClick}
    stroke={stroke}
    fill={fill}
    className={className}
  >
    <path d="M3 18a7 7 0 0 1 4-6.33V8.33A7 7 0 0 1 3 2H1V0h18v2h-2a7 7 0 0 1-4 6.33v3.34A7 7 0 0 1 17 18h2v2H1v-2h2zM5 2a5 5 0 0 0 4 4.9V10h2V6.9A5 5 0 0 0 15 2H5z" />
  </BaseIcon>
)
