import React from 'react'
import Logo from '../Logo'
import Icon from '../Icon'

import './header.scss'

const Header = ({}) => (
  <header className="header">
    <div className="header__content">
      <Logo />
      <section className="user-section space-between-inline-m">
        <Icon name="user" height={30} width={30} />
        <strong>usuário</strong>
      </section>
    </div>
  </header>
)

export default Header
