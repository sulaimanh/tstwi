import React, { FC } from 'react'

export interface BaseIconProps {
  size?: string
  stroke?:
    | `stroke-${string}-${number}`
    | 'stroke-black'
    | 'stroke-white'
    | 'stroke-inherit'
    | 'stroke-current'
    | 'stroke-transparent'
  fill?:
    | `fill-${string}-${number}`
    | 'fill-black'
    | 'fill-white'
    | 'stroke-inherit'
    | 'stroke-current'
    | 'stroke-transparent'
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
  className,
  onClick,
  stroke,
  fill,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    width={size}
    height={size}
    onClick={onClick}
    className={`${stroke} ${fill} ${className}`}
  >
    {children}
  </svg>
)
