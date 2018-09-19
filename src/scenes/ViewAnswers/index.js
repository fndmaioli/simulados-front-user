import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Button from 'components/Button'
import Input from 'components/Input'
import Field from 'components/Field'
import Card from 'components/Card'
import RadioGroup from 'components/RadioGroup'
import Select from 'components/Select'
import Modal from 'components/Modal'
import Container from 'components/Container'

<<<<<<< HEAD
import './view-answers.scss'
=======
import './viewAnswers.scss'
>>>>>>> fixing problems on the answers view screen

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
<<<<<<< HEAD
      userAnswer: adf56,
=======
      userAnswer: abd34,
>>>>>>> fixing problems on the answers view screen
      coments: cc111,
      links: dc456,
    }
  }

  componentDidMount() {
    const { correct } = this.state
    const { userAnswer } = this.state
<<<<<<< HEAD
    this.setState({ viewAnswers: correct === userAnswer })
=======
    return correct === userAnswer
      ? this.setState({ viewAnswers: true })
      : this.setState({ viewAnswers: false })
>>>>>>> fixing problems on the answers view screen
  }

  render() {
    return (
      <Container>
        {this.state.viewAnswers ? (
          <div>
            <h1 className="spacing space-x-m">Resposta Correta</h1>
            <Card className="view-answers  answer--right">
              <p>{this.state.correct}</p>
            </Card>{' '}
          </div>
        ) : (
<<<<<<< HEAD
            <div>
              <h1 className="spacing space-x-m">Resposta Incorreta</h1>
              <Card className="view-answers  answer--right">
                <p>{this.state.correct}</p>
              </Card>
              <Card className="view-answers answer--wrong">
                <p>{this.state.userAnswer}</p>
              </Card>
            </div>
          )}

        <div>
          <h1 className="spacing space-x-m">Comentários do Professor</h1>
          <p className="spacing space-x-m">{this.state.coments}</p>

          <h2 className="spacing space-x-m">Links relacionados</h2>
          <a className="spacing space-x-m" href={this.state.links}>
            {this.state.links}
          </a>
=======
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
          <a href="url">{this.state.links}</a>
>>>>>>> fixing problems on the answers view screen
        </div>
        <footer className="flex justify-center">
          <Button onClick="">Próxima Questão</Button>
        </footer>
      </Container>
    )
  }
}

export default ViewAnswers
