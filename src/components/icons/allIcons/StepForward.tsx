import React, { FC } from 'react'
import { BaseIcon, BaseIconProps } from '../BaseIcon'

export const StepForward: FC<BaseIconProps> = ({
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
    <path d="M13 5h3v10h-3V5zM4 5l9 5-9 5V5z" />
  </BaseIcon>
)
