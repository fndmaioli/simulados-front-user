import React from 'react'

import AreaItem from 'components/AreaItem'
import Button from 'components/Button'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getStudent } from 'store/user'
import { getExam } from 'store/exam'
import { createParticipation } from 'store/exam/actions'
import { push } from 'connected-react-router'

import './mountExam.scss'

class MountExam extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedAreas: props.areas,
      allAreasSelected: false,
    }
  }

  componentDidMount() {
    //chamar rota de buscar edições
  }

  selectAllAreas() {
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

  async doExam(examId) {
    //TODO fazer o exame montado
    const studentId = this.props.student.id
    await this.props.createParticipation(studentId, examId)

    const { exam } = this.props

    if (exam) {
      this.props.push('/simulado')
    } else {
      console.log('Erro ao buscar exame!')
    }
  }

  render() {
    return (
      <div>
        <div className="flex justify-between">
          <h2>Selecione ás áreas que você deseja no seu exame</h2>
          <Button
            ghost
            onClick={() => this.selectAllAreas()}
            className="mountexam__button"
          >
            {this.state.allAreasSelected
              ? 'Desmarcar todos'
              : 'Selecionar todos'}
          </Button>
        </div>
        <ul className="space-between-s">
          {this.state.selectedAreas.map(area => (
            <AreaItem
              area={area}
              name={area.name}
              onClick={area => this.toggleArea(area)}
              selected={area.selected}
            />
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  areas: [
    {
      //TODO: REMOVER MOCK QUANDO TIVER A ROTA
      id: 1,
      name: 'Direito Civil',
      selected: false,
    },
    {
      id: 2,
      name: 'Direito comercial ou empresarial',
      selected: false,
    },
    {
      id: 3,
      name: 'Direito do consumidor',
      selected: false,
    },
    {
      id: 4,
      name: 'Direito da tecnologia da informação',
      selected: false,
    },
    {
      id: 5,
      name: 'Direito tributário',
      selected: false,
    },
    {
      id: 6,
      name: 'Direito administrativo',
      selected: false,
    },
    {
      id: 7,
      name: 'Direito previdenciário',
      selected: false,
    },
    {
      id: 8,
      name: 'Direito penal ou criminal',
      selected: false,
    },
    {
      id: 9,
      name: 'Mediação, conciliação e arbitragem',
      selected: false,
    },
  ],
  exam: getExam(state),
  student: getStudent(state),
})

export default connect(
  mapStateToProps,
  dispatch =>
    bindActionCreators(
      {
        createParticipation,
        push,
      },
      dispatch,
    ),
)(MountExam)
