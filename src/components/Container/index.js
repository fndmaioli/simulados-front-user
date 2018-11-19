import React from 'react'
import cn from 'classnames'

import './container.scss'

const Container = ({ children, size, wide = false, className }) => (
  <div
    className={cn(
      'container',
      size && `container--${size}`,
      wide && 'container--wide',
      className,
    )}
  >
    {children}
  </div>
)

export default Container
