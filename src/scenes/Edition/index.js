import React from 'react'

import Input from 'components/Input'

const EditionItem = props => <div />

const editionList = [
  { name: 'XXIII', year: '2018.2', approval: '17.07%' },
  { name: 'XXII', year: '2017.1', approval: 'N/D' },
  { name: 'XXI', year: '2016.3', approval: 'N/D' },
]

const RetornaLista = edicao => {
  return <li>{edicao.name + edicao.year + edicao.approval}</li>
}

class Edition extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1> Seleção a edição do exame </h1>
        <Input placeholder="Procure uma edição..." icon="search" block />
        <ul>
          {editionList.map(edition => (
            <RetornaLista
              name={edition.name}
              year={edition.year}
              approval={edition.approval}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Edition
