import React, { Component } from 'react'
import { withRouter } from 'react-router'

import Header from '../Header'
import Container from '../Container'

class Layout extends Component {
  render() {
    const { location, children } = this.props

    return (
      <div>
        {location.pathname === '/' ? null : <Header />}
        <Container>{children}</Container>
      </div>
    )
  }
}

export default withRouter(Layout)
