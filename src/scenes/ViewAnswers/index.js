import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { growl } from 'store/ui/actions'
import { GROWL_INFO, GROWL_ERROR, GROWL_SUCCESS } from 'store/ui/constants'

import Button from 'components/Button'
import Input from 'components/Input'
import Field from 'components/Field'
import Card from 'components/Card'
import RadioGroup from 'components/RadioGroup'
import Select from 'components/Select'
import Modal from 'components/Modal'
import Container from 'components/Container'

import './viewAnswers.scss'

let abd34 = 'A resposta correta é essa aqui'
let adf56 = 'Essa é a resposta do usuário'
let cc111 = 'A resposta correta é a x pois a estrutura.....'
let dc456 = 'https://www.google.com/'

class ViewAnswers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      viewAnswers: null,
      correct: abd34,
      userAnswer: abd34,
      coments: cc111,
      links: dc456,
    }
  }

  componentDidMount() {
    const { correct } = this.state
    const { userAnswer } = this.state
    return correct === userAnswer
      ? this.setState({ viewAnswers: true })
      : this.setState({ viewAnswers: false })
  }

  render() {
    return (
      <Container>
        {this.state.viewAnswers ? (
          <div>
            <h1 className="title">Resposta Correta</h1>
            <Card className="rightAnswer">
              <p>{this.state.correct}</p>
            </Card>{' '}
          </div>
        ) : (
          <div>
            <h1 className="title">Resposta Incorreta</h1>
            <Card className="rightAnswer">
              <p>{this.state.correct}</p>
            </Card>
            <Card className="wrongAnswer">
              <p>{this.state.userAnswer}</p>
            </Card>
          </div>
        )}

        <div>
          <h1 className>Comentários do Professor</h1>
          <p className="title">{this.state.coments}</p>

          <h3>Links relacionados</h3>
          <a href="https://www.google.com/">{this.state.links}</a>
        </div>
        <footer className="flex justify-center">
          <Button onClick="">Próxima Questão</Button>
        </footer>
      </Container>
    )
  }
}

export default connect(
  null,
  dispatch =>
    bindActionCreators(
      {
        growl,
      },
      dispatch,
    ),
)(ViewAnswers)
