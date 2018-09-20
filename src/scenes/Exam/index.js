import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchQuestion } from 'store/question/actions'
import { getQuestions } from 'store/question'
import { getExamId } from 'store/exam'

import Button from 'components/Button'
import Input from 'components/Input'
import Field from 'components/Field'
import Card from 'components/Card'
import RadioGroup from 'components/RadioGroup'
import { Radio } from 'components/RadioGroup'
import Select from 'components/Select'
import Modal from 'components/Modal'
import './exam.scss'
import Container from 'components/Container'
import 'slick-carousel/slick/slick.scss'
import 'slick-carousel/slick/slick-theme.scss'
import Slider from 'react-slick'

class Exam extends React.Component {
  constructor(props) {
    super(props)
    this.state = { modalOpen: false, showConfirmButton: false }
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.examId)
  }

  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    }

    return (
      <Container>
        <Slider {...settings}>
          {this.props.questions.map(question => {
            return (
              <div key={question.id}>
                <h1>Questão {question.id}</h1>
                <p>{question.tittle}</p>

                <h3>Alternativas</h3>
                {question.alternatives.map(alternative => (
                  <Card className="card-alternative">
                    <Radio
                      key={alternative.id}
                      name="alternatives"
                      value={alternative.id}
                      label={alternative.text}
                      onChange={() =>
                        this.setState({ showConfirmButton: true })
                      }
                    />
                  </Card>
                ))}
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
})

export default connect(
  mapStateToProps,
  dispatch =>
    bindActionCreators(
      {
        fetchQuestion,
      },
      dispatch,
    ),
)(Exam)
