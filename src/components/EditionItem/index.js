import React from 'react'

import Card from 'components/Card'

import './edition-item.scss'

const EditionItem = edicao => (
  <Card
    onClick={() => alert('Você escolheu fazer o exame do ano: ' + edicao.year)}
    className="edition-item flex items-center justify-between"
    as="li"
  >
    <span>
      <strong className="edition-item__name">{edicao.name}</strong>
      <span> {'(' + edicao.year + ')'} </span>
    </span>
    <span className="edition-item__approval">
      <span> aprovação: </span>
      <strong> {edicao.approval} </strong>
    </span>
  </Card>
)

export default EditionItem
