import React, { FC } from 'react'
import { BaseIcon, BaseIconProps } from '../BaseIcon'

export const Airplane: FC<BaseIconProps> = ({
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
    <path d="M8.4 12H2.8L1 15H0V5h1l1.8 3h5.6L6 0h2l4.8 8H18a2 2 0 1 1 0 4h-5.2L8 20H6l2.4-8z" />
  </BaseIcon>
)
