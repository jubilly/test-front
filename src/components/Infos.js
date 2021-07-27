import React from 'react'
import { Component } from 'react'
import { Info__wrapper, Grid__info, Info__total } from '../styles/styles'
export default class Infos extends Component {
  render() {
    return (
      <>
        <Info__wrapper bkgcolor={'#eee'}>
          <Grid__info align={'space-between'}>
            {this.props.data.map((item, index) => {
              return (
                <div key={index}>
                  <span>{item.name}</span>
                  <span>R$ {item.value}</span>
                </div>
              )
            })}
            <Info__total>
              <span>Total</span>
              <span>{this.props.total}</span>
            </Info__total>
          </Grid__info>
        </Info__wrapper>
      </>
    )
  }
}
