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
    this.state = { modalOpen: false }
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

    const questions = [
      {
        id: '01',
        tittle:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        alternatives: [
          {
            id: '1',
            text:
              'Card with some text. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          },
          {
            id: '2',
            text:
              'Card with some text. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          },
          {
            id: '3',
            text:
              'Card with some text. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          },
          {
            id: '4',
            text:
              'Card with some text. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          },
        ],
      },
      {
        id: '02',
        tittle:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        alternatives: [
          {
            id: '1',
            text:
              'Card with some text. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          },
          {
            id: '2',
            text:
              'Card with some text. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          },
          {
            id: '3',
            text:
              'Card with some text. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          },
          {
            id: '4',
            text:
              'Card with some text. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          },
        ],
      },
      {
        id: '03',
        tittle:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        alternatives: [
          {
            id: '1',
            text:
              'Card with some text. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          },
          {
            id: '2',
            text:
              'Card with some text. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          },
          {
            id: '3',
            text:
              'Card with some text. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          },
          {
            id: '4',
            text:
              'Card with some text. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          },
        ],
      },
      {
        id: '04',
        tittle:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        alternatives: [
          {
            id: '1',
            text:
              'Card with some text. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          },
          {
            id: '2',
            text:
              'Card with some text. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          },
          {
            id: '3',
            text:
              'Card with some text. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          },
          {
            id: '4',
            text:
              'Card with some text. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          },
        ],
      },
      {
        id: '05',
        tittle:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        alternatives: [
          {
            id: '1',
            text:
              'Card with some text. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          },
          {
            id: '2',
            text:
              'Card with some text. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          },
          {
            id: '3',
            text:
              'Card with some text. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          },
          {
            id: '4',
            text:
              'Card with some text. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
          },
        ],
      },
    ]

    return (
      <Container>
        <Slider {...settings}>
          {questions.map(question => {
            return (
              <div key={question.id}>
                <h1>Questão {question.id}</h1>
                <p>{question.tittle}</p>
                <Button
                  ghost
                  onClick={() => this.setState({ modalOpen: true })}
                >
                  Alternativas
                </Button>

                <Modal
                  key={question.id}
                  onClose={() => this.setState({ modalOpen: false })}
                  open={this.state.modalOpen}
                >
                  <h3>Alternativas</h3>
                  {question.alternatives.map(alternative => (
                    <Card className="card-alternative">
                      <Radio
                        key={alternative.id}
                        name="alternatives"
                        value={alternative.id}
                        label={alternative.text}
                      />
                    </Card>
                  ))}
                </Modal>
              </div>
            )
          })}
        </Slider>
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
)(Exam)
