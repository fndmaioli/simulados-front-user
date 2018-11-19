import React from 'react'
import { connect } from 'react-redux'

import Header from '../Header'
import Container from '../Container'

const Layout = ({ children }) => (
  <div>
    <Header />
    <Container wide={window.location.pathname === '/simulado'}>
      {children}
    </Container>
  </div>
)

export default connect(state => ({ router: state.router }))(Layout)
