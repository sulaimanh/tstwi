import React, { FC } from 'react'
import { BaseIcon, BaseIconProps } from '../BaseIcon'

export const Backspace: FC<BaseIconProps> = ({
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
    <path d="M0 10l7-7h13v14H7l-7-7zm14.41 0l2.13-2.12-1.42-1.42L13 8.6l-2.12-2.13-1.42 1.42L11.6 10l-2.13 2.12 1.42 1.42L13 11.4l2.12 2.13 1.42-1.42L14.4 10z" />
  </BaseIcon>
)
