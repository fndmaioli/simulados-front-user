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
    return (
      <Container>
        <Modal
          onClose={() => this.setState({ modalOpen: false })}
          open={this.state.modalOpen}
        >
          <h3>Modal example</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Modal>

        <Slider {...settings}>
          <div>
            <h1>Questão 01</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <Button ghost onClick={() => this.setState({ modalOpen: true })}>
              Open modal
            </Button>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
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
