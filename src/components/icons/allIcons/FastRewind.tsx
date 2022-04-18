import React, { FC } from 'react'
import { BaseIcon, BaseIconProps } from '../BaseIcon'

export const FastRewind: FC<BaseIconProps> = ({
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
    <path d="M19 5v10l-9-5 9-5zm-9 0v10l-9-5 9-5z" />
  </BaseIcon>
)
