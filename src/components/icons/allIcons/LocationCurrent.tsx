import React, { FC } from 'react'
import { BaseIcon, BaseIconProps } from '../BaseIcon'

export const LocationCurrent: FC<BaseIconProps> = ({
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
    <path d="M0 0l20 8-8 4-2 8z" />
  </BaseIcon>
)
