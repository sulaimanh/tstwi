import React, { FC } from 'react'
import { BaseIcon, BaseIconProps } from '../BaseIcon'

export const SubdirectoryRight: FC<BaseIconProps> = ({
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
    <path d="M3.5 13H12v5l6-6-6-6v5H4V2H2v11z" />
  </BaseIcon>
)
