import React from 'react'
import { Component } from 'react'
import { Grid__wrapper, Grid__item, Grid__image, Title } from '../styles/styles'
export default class Products extends Component {
  render() {
    return (
      <>
        <Title color={'#999'}>{this.props.title}</Title>
        <Grid__wrapper bkgcolor={'#fff'}>
          {this.props.data.map((item, index) => {
            return (
              <Grid__item key={index} show={`${this.props.show}`} align={'center'}>
                <Grid__image>
                  <div>
                    <img src={item.product.imageObjects[0].medium} alt={item.product.name} />
                  </div>
                </Grid__image>
                <div>
                  <p>{item.product.name}</p>
                  <p>R$ {item.product.priceSpecification.price}</p>
                </div>
              </Grid__item>
            )
          })}
        </Grid__wrapper>
      </>
    )
  }
}
