import React from 'react'
import Slider from 'react-slick'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

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
import AlternativeSelection from 'components/AlternativeSelection'
import Container from 'components/Container'
import JumpToQuestion from 'components/JumpToQuestion'

import media from 'utils/media'

import './exam.scss'

class Exam extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showConfirmButton: false,
      answers: {},
      currentQuestion: null,
      questionIndex: 0,
      jumpToQuestionOpen: false,
    }
  }

  componentDidMount() {
    this.props
      .fetchQuestion(this.props.examId)
      .then(() => this.setState({ currentQuestion: this.props.questions[0] }))

    document.addEventListener('keyup', this.handleKeyUp)
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp)
  }

  handleKeyUp = ({ key }) => {
    const handler = {
      ArrowLeft: () => this.moveQuestionBy(-1),
      ArrowRight: () => this.moveQuestionBy(+1),
    }[key]

    handler && handler()
  }

  fetchMoreQuestions(currentSlide) {
    this.setState({ questionIndex: currentSlide })

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

  showQuestionByIndex(index) {
    if (index < 0) return

    if (index >= this.props.questions.length) {
      this.props.push('/resultado')
    }

    this.slider.slickGoTo(index)
    this.setState({
      currentQuestion: this.props.questions[index],
      questionIndex: index,
    })

    document.body.scrollIntoView({ behaviour: 'smooth' })
  }

  moveQuestionBy(val) {
    this.showQuestionByIndex(this.state.questionIndex + val)
  }

  onConfirmAnswer = () => {
    this.moveQuestionBy(+1)
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
      swipeToSlide: true,
      onSwipe: direction =>
        direction === 'left'
          ? this.moveQuestionBy(+1)
          : this.moveQuestionBy(-1),
      ref: slider => (this.slider = slider),
      adaptiveHeight: true,
    }

    return (
      <div style={{ paddingBottom: 48 }}>
        <div>
          <Slider {...settings}>
            {this.props.questions.map(question => {
              return (
                <Container size="md" key={question.id}>
                  <header className="flex items-center justify-between space-stack-l">
                    <h1 style={{ margin: 0 }}>
                      Questão {this.state.questionIndex + 1}
                    </h1>
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
                  <p
                    className="space-stack-l"
                    style={{ fontSize: 18, lineHeight: 1.4 }}
                  >
                    {question.statement}
                  </p>
                  <AlternativeSelection
                    name={question.id}
                    alternatives={question.alternatives.map(a => ({
                      value: a.id,
                      label: a.description,
                      letter: a.letter,
                    }))}
                    onChange={event =>
                      this.onClickAlternative(event, question.id)
                    }
                    selected={this.state.answers[(question || {}).id]}
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
        <div
          style={{
            width: '100vw',
            position: 'fixed',
            bottom: 0,
            right: 0,
          }}
        >
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
              disabled={
                !this.state.answers[(this.state.currentQuestion || {}).id]
              }
            >
              Confirmar resposta
            </Button>
          </Container>
        </div>
        <JumpToQuestion
          open={this.state.jumpToQuestionOpen}
          questions={this.props.questions}
          onClose={() => this.setState({ jumpToQuestionOpen: false })}
          onSelect={question => this.jumpToQuestion(question)}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, { questions = [] }) => ({
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
        push,
      },
      dispatch,
    ),
)(Exam)
