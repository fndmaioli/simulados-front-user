import React from 'react'

import Header from '../Header'
import Container from '../Container'

const Layout = ({ children }) => (
  <div>
    <Header />
    <Container>{children}</Container>
  </div>
)

export default Layout
