import React from 'react'
import feather from 'feather-icons'
import propTypes from 'prop-types'

import './icon.scss'

const Icon = ({ name, size }) => (
  <i
    className="icon"
    dangerouslySetInnerHTML={{__html: feather.icons[name].toSvg({ height: size,  width: size })}}
  />
)

/**
 * Icon custom props.
 */
Icon.propTypes = {
  size: propTypes.number, 
  name: propTypes.string
}

/**
* Icon default value props.
*/
Icon.defaultProps = {
  size: 16,  
  name: 'alert-triangle'
}

export default Icon
