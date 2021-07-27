import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default class ButtonCTA extends Component {
  render() {
    return (
      <>
        <Button to={this.props.action} disabled={this.props.disabled} onClick={this.props.click}>
          <p>{this.props.name}</p>
        </Button>
      </>
    )
  }
}
export const Button = styled(Link)`
  background-color: #ff6c00;
  border: none;
  border-radius: 3px;
  box-shadow: inset 0 -3px 0 0 #d45a00, 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;
  height: 60px;
  width: 100%;
  display: block;
  text-decoration: none;
  p {
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 61px;
    text-transform: uppercase;
    text-align: center;
  }
  &:hover {
    background-color: #d45a00;
  }
`
