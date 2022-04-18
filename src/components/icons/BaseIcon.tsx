import React, { FC } from 'react'

export interface BaseIconProps {
  size?: string
  stroke?: `stroke-${string}-${number}`
  fill?: `fill-${string}-${number}` | 'fill-black' | 'fill-white'
  className?: string
  onClick?: () => void
  children?: any
}

interface SvgIconProps extends BaseIconProps {
  viewBox: string
}

export const BaseIcon: FC<SvgIconProps> = ({
  viewBox,
  children,
  size,
  stroke,
  fill,
  className,
  onClick,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    width={size}
    height={size}
    fill="none"
    onClick={onClick}
    className={`${stroke} ${fill} ${className}`}
  >
    {children}
  </svg>
)