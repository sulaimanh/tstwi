import React, { FC } from 'react'
import { BaseIcon, BaseIconProps } from '../BaseIcon'

export const FastForward: FC<BaseIconProps> = ({
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
    <path d="M1 5l9 5-9 5V5zm9 0l9 5-9 5V5z" />
  </BaseIcon>
)
