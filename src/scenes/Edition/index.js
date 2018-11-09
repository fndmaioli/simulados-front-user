import React from 'react'

import Input from 'components/Input'
import EditionItem from 'components/EditionItem'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getEditions } from 'store/edition'
import { fetchEditions } from 'store/edition/actions'

class Edition extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: '',
    }
  }

  componentDidMount() {
    this.props.fetchEditions()
  }

  handleChange = e => {
    this.setState({ inputValue: e.target.value }, () => {})
  }

  render() {
    return (
      <div>
        <h1>Selecione uma edição do Exame Oficial da OAB</h1>
        <Input
          className="space-stack-m"
          placeholder="Procure uma edição..."
          icon="search"
          value={this.state.inputValue}
          onChange={this.handleChange}
          block
        />
        <ul className="space-between-s">
          {this.props.editions
            .filter(element => {
              const regex = new RegExp(this.state.inputValue, 'gi')
              return element.name.match(regex)
            })
            .map(edition => (
              <EditionItem
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

const mapStateToProps = state => ({
  editions: getEditions(state),
})

export default connect(
  mapStateToProps,
  dispatch =>
    bindActionCreators(
      {
        fetchEditions,
      },
      dispatch,
    ),
)(Edition)
