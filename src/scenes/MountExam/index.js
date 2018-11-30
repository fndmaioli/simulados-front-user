import React from 'react'

import AreaItem from 'components/AreaItem'
import Button from 'components/Button'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchAreas } from 'store/area/actions'
import { fetchMountExam } from 'store/exam/actions'
import { growl } from 'store/ui/actions'
import { GROWL_ERROR } from 'store/ui/constants'
import { getData } from 'store/area'
import { getStudent } from 'store/user'
import { getExam } from 'store/exam'
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
      selectedAreas: this.props.data.areas || [],
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

  doMountedExam = async () => {
    const { selectedAreas } = this.state
    const idAreas = []

    selectedAreas.forEach(area => {
      if (area.selected) idAreas.push(area.id)
    })

    if (idAreas.length > 0) {
      const { student } = this.props
      const studentId = student.id
      await this.props.fetchMountExam(idAreas, studentId)
      await this.props.createParticipation(
        studentId,
        this.props.exam.data.exam.id,
      )

      if (this.props.exam) {
        this.props.push('/simulado')
      } else {
        this.props.growl('Erro ao criar exame.', GROWL_ERROR)
      }
    } else {
      this.props.growl('Nenhuma área selecionada.', GROWL_ERROR)
    }
  }

  render() {
    const { allAreasSelected, selectedAreas } = this.state

    return (
      <main className="space-between-m">
        <header className="flex justify-between">
          <h2 className="mountexam__title">
            Selecione ás áreas que você deseja no seu exame
          </h2>
          <Button ghost onClick={this.selectAllAreas} className="space-stack-m">
            {allAreasSelected ? 'Desmarcar todos' : 'Selecionar todos'}
          </Button>
        </header>
        <body className="space-between-s">
          {selectedAreas.map(area => (
            <AreaItem
              id={area.id}
              area={area}
              name={area.name}
              onClick={area => this.toggleArea(area)}
              selected={area.selected}
            />
          ))}
        </body>
        <footer className="flex justify-center">
          <Button
            ghost
            className="mountexam__button"
            onClick={this.doMountedExam}
          >
            Iniciar exame
          </Button>
        </footer>
      </main>
    )
  }
}

const mapStateToProps = state => ({
  data: getData(state),
  student: getStudent(state),
  exam: getExam(state),
})

export default connect(
  mapStateToProps,
  dispatch =>
    bindActionCreators(
      {
        fetchAreas,
        fetchMountExam,
        createParticipation,
        push,
        growl,
      },
      dispatch,
    ),
)(MountExam)
