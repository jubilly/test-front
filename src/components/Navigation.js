import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Navigation__wrapper } from '../styles/styles'

export class Navigation extends Component {
  render() {
    return (
      <Navigation__wrapper>
        <NavLink exact to="/" name="sacola">
          Sacola
        </NavLink>
        <NavLink exact to="/payments" name="pagamento">
          Pagamento
        </NavLink>
        <NavLink exact to="/thankYou" name="confirmação">
          Confirmação
        </NavLink>
      </Navigation__wrapper>
    )
  }
}

export default Navigation
