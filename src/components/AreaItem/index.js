import React from 'react'

import Card from 'components/Card'

import './area-item.scss'
const AreaItem = ({ name, area, onClick }) => (
  <Card
    onClick={() => onClick(area)}
    className="edition-item flex items-center justify-between"
    as="li"
  >
    <span>{name}</span>
  </Card>
)

export default AreaItem
