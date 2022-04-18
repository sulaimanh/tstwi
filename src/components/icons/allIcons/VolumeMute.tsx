import React, { FC } from 'react'
import { BaseIcon, BaseIconProps } from '../BaseIcon'

export const VolumeMute: FC<BaseIconProps> = ({
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
    <path d="M9 7H5v6h4l5 5V2L9 7z" />
  </BaseIcon>
)
