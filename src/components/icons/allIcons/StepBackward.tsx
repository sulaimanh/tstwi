import React, { FC } from 'react'
import { BaseIcon, BaseIconProps } from '../BaseIcon'

export const StepBackward: FC<BaseIconProps> = ({
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
    <path d="M4 5h3v10H4V5zm12 0v10l-9-5 9-5z" />
  </BaseIcon>
)
