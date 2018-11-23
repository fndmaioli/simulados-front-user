import React from 'react'

import AreaItem from 'components/AreaItem'
import Button from 'components/Button'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchAreas } from 'store/area/actions'
import { getAreas } from 'store/area'
import { createParticipation } from 'store/exam/actions'
import { push } from 'connected-react-router'

import './mountExam.scss'

class MountExam extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedAreas: [],
      allAreasSelected: false,
    }
  }

  async componentWillMount() {
    await this.props.fetchAreas()
    this.setState({
      selectedAreas: this.props.areas,
    })
  }

  selectAllAreas = () => {
    const { allAreasSelected, selectedAreas } = this.state

    const updatedAreas = selectedAreas.map(area => {
      return {
        ...area,
        selected: !allAreasSelected,
      }
    })

    this.setState({
      selectedAreas: updatedAreas,
      allAreasSelected: !allAreasSelected,
    })
  }

  toggleArea(selectedArea) {
    const { selectedAreas } = this.state
    selectedArea.selected = !selectedArea.selected

    this.setState({
      selectedAreas,
      allAreasSelected: false,
    })
  }

  doExam = async () => {
    console.log('fazer exame')
    //TODO fazer o exame montado
    // const studentId = this.props.student.id
    // await this.props.createParticipation(studentId, examId)

    // const { exam } = this.props

    // if (exam) {
    //   this.props.push('/simulado')
    // } else {
    //   console.log('Erro ao buscar exame!')
    // }
  }

  render() {
    return (
      <main className="space-between-m">
        <header className="flex justify-between">
          <h2 className="mountexam__title">
            Selecione ás áreas que você deseja no seu exame
          </h2>
          <Button ghost onClick={this.selectAllAreas} className="space-stack-m">
            {this.state.allAreasSelected
              ? 'Desmarcar todos'
              : 'Selecionar todos'}
          </Button>
        </header>
        <body className="space-between-s">
          {this.state.selectedAreas.map(area => (
            <AreaItem
              area={area}
              name={area.name}
              onClick={area => this.toggleArea(area)}
              selected={area.selected}
            />
          ))}
        </body>
        <footer className="flex justify-center">
          <Button ghost className="mountexam__button" onClick={this.doExam}>
            Iniciar exame
          </Button>
        </footer>
      </main>
    )
  }
}

const mapStateToProps = state => ({
  areas: getAreas(state),
})

export default connect(
  mapStateToProps,
  dispatch =>
    bindActionCreators(
      {
        fetchAreas,
        push,
      },
      dispatch,
    ),
)(MountExam)
