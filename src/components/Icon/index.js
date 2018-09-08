import React from 'react'
import feather from 'feather-icons'
import propTypes from 'prop-types'

import './icon.scss'

const Icon = ({ name, height, width, color }) => (
  <i
    className="icon"
    dangerouslySetInnerHTML={{__html: feather.icons[name].toSvg({ height, width, color })}}
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
}

/**
* Icon default value props.
*/
Icon.defaultProps = {
  height: 16,  
  width: 16,
  name: 'alert-triangle',
  color: 'black'
}

export default Icon
