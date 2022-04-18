import React, { FC } from 'react'
import { BaseIcon, BaseIconProps } from '../BaseIcon'

export const BookmarkCopy2: FC<BaseIconProps> = ({
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
    <polygon points="18 12 18 13 8 13 8 18 2 12 8 6 8 11 16 11 16 2 18 2" />
  </BaseIcon>
)
