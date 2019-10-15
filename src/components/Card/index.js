import React from 'react'
import cn from 'classnames'

import './card.scss'

const paddings = {
  s: '1rem',
  m: '2rem',
  l: '3rem',
}

const Card = ({
  children,
  as: T = 'div',
  className,
  onClick,
  onTouchEnd,
  padding,
  backColor,
  disabled,
}) => (
  <T
    className={cn('card', className)}
    style={{
      padding: paddings[padding],
      backgroundColor: backColor,
      ...(disabled ? { cursor: 'default' } : {}),
    }}
    onTouchEnd={onTouchEnd}
    onClick={onClick}
  >
    {children}
  </T>
)

export default Card
