import React from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import logo from 'assets/logo.png'
import './logo.scss'

const Logo = ({ small }) => (
  <Link className={cn('logo', small && 'logo--small')} to="/">
    <img className="logo__image" src={logo} />
  </Link>
)

export default Logo
