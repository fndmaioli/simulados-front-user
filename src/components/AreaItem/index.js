import React from 'react'

import Card from 'components/Card'
import Icon from 'components/Icon'

import './area-item.scss'
const AreaItem = ({ name, area, onClick, selected = false }) => (
  <Card
    onClick={() => onClick(area)}
    className="area-item flex items-center justify-between"
    as="li"
  >
    <span>{name}</span>
    {selected && <Icon name="check" height={30} width={30} />}
  </Card>
)

export default AreaItem
