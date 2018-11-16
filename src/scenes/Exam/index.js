import React from 'react'
import Slider from 'react-slick'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  fetchQuestion,
  fetchMoreQuestion,
  answerQuestion,
} from 'store/question/actions'
import { getQuestions, getNumberOfQuestions } from 'store/question'
import { getExamId, getParticipationId } from 'store/exam'

import Button from 'components/Button'
import Modal from 'components/Modal'
import RadioGroup from 'components/RadioGroup'
import Container from 'components/Container'

import media from 'utils/media'

import './exam.scss'

class Exam extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showConfirmButton: false,
      answers: {},
      currentQuestion: null,
      questionIndex: null,
      jumpToQuestionOpen: false,
    }
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.examId)
  }

  fetchMoreQuestions(currentSlide) {
    this.setState({ currentQuestion: currentSlide })

    if (
      this.props.questions.length == currentSlide + 1 &&
      this.props.questions.length < this.props.numberOfQuestions
    ) {
      this.props.fetchMoreQuestion(
        this.props.examId,
        this.props.questions[this.props.questions.length - 1],
      )
    }
  }

  onClickAlternative(option, questionId) {
    const alternativeId = option.value
    const participationId = this.props.participationId
    const answers = {
      ...this.state.answers,
      [questionId]: alternativeId,
    }

    this.setState({ selected: option.value, answers })
    this.props.answerQuestion(participationId, questionId, alternativeId)
  }

  alternativesToRadioButton(alternatives) {
    return alternatives.map(alternative => ({
      value: alternative.id,
      label: alternative.description,
    }))
  }

  showQuestionByIndex(index) {
    this.slider.slickGoTo(index)
    this.setState({
      currentQuestion: this.props.questions[index],
      questionIndex: index,
    })
  }

  onConfirmAnswer = () => {
    this.showQuestionByIndex(this.state.currentQuestion + 1)
  }

  jumpToQuestion = question => {
    this.showQuestionByIndex(this.props.questions.indexOf(question))
  }

  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      afterChange: event => this.fetchMoreQuestions(event),
      ref: slider => (this.slider = slider),
      adaptiveHeight: true,
    }

    return (
      <div>
        <div style={{ maxHeight: 545 }}>
          <Slider {...settings}>
            {this.props.questions.map(question => {
              return (
                <Container size="md" key={question.id}>
                  <header classNames="flex items-center justify-between">
                    <h1>Questão {question.id}</h1>
                    <Button
                      ghost
                      icon="corner-down-right"
                      onClick={() =>
                        this.setState({ jumpToQuestionOpen: true })
                      }
                    >
                      Pular para...
                    </Button>
                  </header>
                  <p className="space-stack-l" style={{ fontSize: 18 }}>
                    {question.statement}
                  </p>
<<<<<<< HEAD
=======
                  <h3>Alternativas</h3>
>>>>>>> COMITAO
                  <RadioGroup
                    name={question.id}
                    options={this.alternativesToRadioButton(
                      question.alternatives,
                    )}
                    onChange={event =>
                      this.onClickAlternative(event, question.id)
                    }
                  />
                  <footer className="flex justify-center">
                    {this.state.showConfirmButton && (
                      <Button>Confirma Resposta</Button>
                    )}
                  </footer>
                </Container>
              )
            })}
          </Slider>
        </div>
        <Container
          className="flex items-center justify-end"
          as="footer"
          size="md"
        >
          <Button
            className="confirm-button"
            size="l"
            block={media.lessThan.tabletLandscape()}
            onClick={this.onConfirmAnswer}
            disabled={!this.state.answers[this.state.currentQuestion.id]}
          >
            Confirmar
          </Button>
        </Container>
        <Modal
          open={this.state.jumpToQuestionOpen}
          onClose={() => this.setState({ jumpToQuestionOpen: false })}
        >
          <input placeholder="Pular para questão..." />
          <ul>
            {this.props.questions.map(q => (
              <li onClick={() => this.jumpToQuestion(q)}>Questão {q.id}</li>
            ))}
          </ul>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  examId: getExamId(state),
  questions: getQuestions(state),
  numberOfQuestions: getNumberOfQuestions(state),
  participationId: getParticipationId(state),
})

export default connect(
  mapStateToProps,
  dispatch =>
    bindActionCreators(
      {
        fetchQuestion,
        fetchMoreQuestion,
        answerQuestion,
      },
      dispatch,
    ),
)(Exam)
