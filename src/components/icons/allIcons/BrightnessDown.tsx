import React, { FC } from 'react'
import { BaseIcon, BaseIconProps } from '../BaseIcon'

export const BrightnessDown: FC<BaseIconProps> = ({
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
    <path d="M10 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM9 4a1 1 0 1 1 2 0 1 1 0 1 1-2 0zm4.54 1.05a1 1 0 1 1 1.41 1.41 1 1 0 1 1-1.41-1.41zM16 9a1 1 0 1 1 0 2 1 1 0 1 1 0-2zm-1.05 4.54a1 1 0 1 1-1.41 1.41 1 1 0 1 1 1.41-1.41zM11 16a1 1 0 1 1-2 0 1 1 0 1 1 2 0zm-4.54-1.05a1 1 0 1 1-1.41-1.41 1 1 0 1 1 1.41 1.41zM4 11a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm1.05-4.54a1 1 0 1 1 1.41-1.41 1 1 0 1 1-1.41 1.41z" />
  </BaseIcon>
)
