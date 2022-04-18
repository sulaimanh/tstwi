import React, { FC } from 'react'
import { BaseIcon, BaseIconProps } from '../BaseIcon'

export const SubdirectoryLeft: FC<BaseIconProps> = ({
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
    <path d="M18 12v1H8v5l-6-6 6-6v5h8V2h2z" />
  </BaseIcon>
)
