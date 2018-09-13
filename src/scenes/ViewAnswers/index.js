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
import { resolve } from 'path'
import { rejects } from 'assert'

class ViewAnswers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      viewAnswers: false,
      alternative: 'Lorem ipsum',
      correct: 'Lorem ipsum',
      coments: 'Congratulations',
    }
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
              <p>{this.state.alternative}</p>
            </Card>{' '}
          </div>
        )}

        <div>
          <h1 className>Comentários do Professor </h1>
          <p className="title">{this.state.coments}</p>

          <h3>Links relacionados</h3>

          <Button className="nextQuestion" onClick="">
            Próxima Questão
          </Button>
        </div>
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
