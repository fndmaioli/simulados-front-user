import React from 'react'
import Logo from '../Logo'
import Icon from '../Icon'
import { connect } from 'react-redux'

import { getUsername } from 'store/user'

import './header.scss'

const Header = ({ username = '' }) => (
  <header className="header">
    <div className="header__content">
      <Logo />
      <section className="user-section space-between-inline-m">
        <Icon name="user" height={30} width={30} />
        <strong>{username}</strong>
      </section>
    </div>
  </header>
)

export default connect(state => ({ username: getUsername(state) }))(Header)
