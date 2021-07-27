import React from 'react'
import { Component } from 'react'
import { Title, Form__Wrapper } from '../styles/styles'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <>
        <Title color={'#999'}>{this.props.title}</Title>
        <Form__Wrapper bkgcolor={'#fff'}>
          {this.props.data.map((item, index) => {
            return <p>{item.value}</p>
          })}
        </Form__Wrapper>
      </>
    )
  }
}
