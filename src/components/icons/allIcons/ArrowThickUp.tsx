import React, { FC } from 'react'
import { BaseIcon, BaseIconProps } from '../BaseIcon'

export const ArrowThickUp: FC<BaseIconProps> = ({
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
    <path d="M7 10v8h6v-8h5l-8-8-8 8h5z" />
  </BaseIcon>
)
