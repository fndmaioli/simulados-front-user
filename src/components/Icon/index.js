import React from 'react'
import feather from 'feather-icons'
import propTypes from 'prop-types'
import cn from 'classnames'

import './icon.scss'

const Icon = ({ name, height, width, color, className }) => (
  <i
    className={cn('icon', className)}
    dangerouslySetInnerHTML={{
      __html: feather.icons[name].toSvg({ height, width, color }),
    }}
  />
)

/**
 * Icon custom props.
 */
Icon.propTypes = {
  height: propTypes.number,
  width: propTypes.number,
  name: propTypes.string,
  color: propTypes.string,
  className: propTypes.string,
}

export default Icon
