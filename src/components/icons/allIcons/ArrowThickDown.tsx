import React, { FC } from 'react'
import { BaseIcon, BaseIconProps } from '../BaseIcon'

export const ArrowThickDown: FC<BaseIconProps> = ({
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
    <path d="M7 10V2h6v8h5l-8 8-8-8h5z" />
  </BaseIcon>
)
