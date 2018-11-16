import React from 'react'

import Card from 'components/Card'

import './edition-item.scss'
const EditionItem = ({ name, year, onClick }) => (
  <Card
    onClick={onClick}
    className="edition-item flex items-center justify-between"
    as="li"
  >
    <span>
      <strong className="edition-item__name">{name}</strong>
      <span> {'(' + year + ')'} </span>
    </span>
    {/* <span className="edition-item__approval">
      <span> aprovação: </span>
      <strong> {edicao.approval} </strong>
    </span> */}
  </Card>
)

export default EditionItem
