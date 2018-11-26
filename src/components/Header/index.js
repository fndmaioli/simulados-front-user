import React from 'react'

import Logo from '../Logo'
import Icon from '../Icon'
import media from 'utils/media'
import { connect } from 'react-redux'

import { getUsername } from 'store/user'

import './header.scss'

const Header = ({ username = '', location }) =>
  media.greaterThan.phone() ? (
    <header className="header">
      <div className="header__content">
        <Logo />
        <section className="user-section space-between-inline-m">
          <Icon name="user" height={30} width={30} />
          <strong>{username}</strong>
        </section>
      </div>
    </header>
  ) : (
    <header
      className="space-inset-m flex justify-between"
      style={{ paddingBottom: 0 }}
    >
      <span
        style={{ visibility: location.pathname === '/' ? 'hidden' : 'visible' }}
      >
        <Icon
          height={28}
          width={28}
          name="arrow-left"
          onClick={() => window.history.go(-1)}
        />
      </span>
      <Logo small />
      <span style={{ width: 28 }} />
    </header>
  )

export default connect(state => ({
  username: getUsername(state),
  location: state.router.location,
}))(Header)
