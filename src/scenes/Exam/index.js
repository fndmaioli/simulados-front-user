import React from 'react'

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
import './exam.scss'
import Container from 'components/Container'
import 'slick-carousel/slick/slick.scss'
import 'slick-carousel/slick/slick-theme.scss'
import Slider from 'react-slick'

class Exam extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showConfirmButton: false,
    }
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.examId)
  }

  fetchMoreQuestions(currentSlide) {
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
    let alternativeId = option.value
    let participationId = this.props.participationId
    this.props.answerQuestion(participationId, questionId, alternativeId)
  }

  alternativesToRadioButton(alternatives) {
    return alternatives.map(alternative => ({
      value: alternative.id,
      label: alternative.description,
    }))
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
    }

    return (
      <Container>
        <Slider {...settings}>
          {this.props.questions.map(question => {
            return (
              <div key={question.id}>
                <h1>Questão {question.id}</h1>
                <p>{question.statement}</p>

                <h3>Alternativas</h3>
                <RadioGroup
                  name="alternatives"
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
              </div>
            )
          })}
        </Slider>
      </Container>
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
