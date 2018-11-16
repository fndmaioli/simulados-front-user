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
import RadioGroup from 'components/RadioGroup'
import Container from 'components/Container'

import media from 'utils/media'

import './exam.scss'

class Exam extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showConfirmButton: false,
      selected: null,
      currentQuestion: 0,
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

    this.setState({ selected: option.value })
    this.props.answerQuestion(participationId, questionId, alternativeId)
  }

  alternativesToRadioButton(alternatives) {
    return alternatives.map(alternative => ({
      value: alternative.id,
      label: alternative.description,
    }))
  }

  onConfirmAnswer = () => {
    const nextQuestion = this.state.currentQuestion + 1

    this.setState({ currentQuestion: nextQuestion })
    this.slider.slickGoTo(nextQuestion)
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
    }

    return (
      <div>
        <div style={{ maxHeight: 545 }}>
          <Slider {...settings}>
            {this.props.questions.map(question => {
              return (
                <Container size="md" key={question.id}>
                  <h1>Questão {question.id}</h1>
                  <p className="space-stack-l" style={{ fontSize: 18 }}>
                    {question.statement}
                  </p>
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
            disabled={!this.state.selected}
          >
            Confirmar
          </Button>
        </Container>
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
