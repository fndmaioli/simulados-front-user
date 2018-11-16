import React from 'react'
import { connect } from 'react-redux'

import Header from '../Header'
import Container from '../Container'

const Layout = ({ children, wide = false }) => (
  <div>
    <Header />
    <Container wide={wide}>{children}</Container>
  </div>
)

export default connect(state => ({ router: state.router }))(Layout)
