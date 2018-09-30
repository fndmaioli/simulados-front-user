import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import { growl } from 'store/ui/actions'
import { fetchAuth, logout } from 'store/user/actions'

import Input from 'components/Input'
import Button from 'components/Button'

import './login.scss'
import logo from 'assets/logo.png'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  componentDidMount() {
    this.props.logout()
  }

  render() {
    return (
      <div className="flex flex-column justify-center items-center login__maincontainer">
        <img className="login__logoimage" src={logo} />
        <h1 className="h1 text-center">Entrar na sua conta</h1>
        <div className="flex flex-column login__inputcontainer">
          <form
            onSubmit={event => this.onPressEnter(event)}
            type="submit"
            className="flex flex-column"
          >
            <Input
              onChange={event => this.setState({ email: event.target.value })}
              placeholder="e-mail"
              className="login__input"
              maxLength={50}
              value={this.state.email}
              type="text"
              required
            />
            <Input
              onChange={event =>
                this.setState({ password: event.target.value })
              }
              placeholder="senha"
              type="password"
              maxLength={50}
              className="login__input"
              value={this.state.password}
              required
            />
            <Button className="flex justify-center login__button">
              Fazer Login
            </Button>
          </form>
          {this.renderLine()}
          <a href="/" className="text-center login__link">
            Criar uma nova conta
          </a>
        </div>
      </div>
    )
  }

  async onPressEnter(event) {
    event.preventDefault()
    const { email, password } = this.state
    await this.props.fetchAuth(email, password)
    this.props.push('/dashboard')
  }

  renderLine() {
    return (
      <div className="flex justify-center items-center">
        <div className="login__lineleft" />
        <small className="login__or">ou</small>
        <div className="login__lineright" />
      </div>
    )
  }
}

export default connect(
  null,
  dispatch =>
    bindActionCreators(
      {
        growl,
        push,
        fetchAuth,
        logout,
      },
      dispatch,
    ),
)(Login)
