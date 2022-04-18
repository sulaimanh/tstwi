import React, { FC } from 'react'
import { BaseIcon, BaseIconProps } from '../BaseIcon'

export const BookmarkCopy3: FC<BaseIconProps> = ({
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
    <polygon points="3.5 13 12 13 12 18 18 12 12 6 12 11 4 11 4 2 2 2 2 13" />
  </BaseIcon>
)
