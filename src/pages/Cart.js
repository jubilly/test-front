import React, { Component } from 'react'
import Grid from '../components/Products'
import Info from '../components/Infos'
import Button from './../components/ButtonCTA'
import service from './../services/api'
import { Wrapper } from '../styles/styles'
import Navigation from './../components/Navigation'

export default class Cart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Produtos',
      buttonName: 'Seguir para o pagamento',
      url: 'payments',
      products: [],
      infos: [],
      data: [],
      total: 0
    }
  }

  setInfo = (data) => {
    let shippingTotal = { name: 'Frete', value: data.shippingTotal },
      discount = { name: 'Desconto', value: -data.discount },
      subTotal = { name: 'Produtos', value: data.subTotal }
    this.setState({ infos: [...this.state.infos, subTotal, shippingTotal, discount] })
  }

  setProducts = (data) => {
    this.setState({ products: [...this.state.products, ...data.items] })
  }

  setTotal = () => {
    let sum = 0
    this.state.infos.map((item) => {
      return (sum = sum + item.value)
    })
    this.setState({ total: parseFloat(sum).toFixed(2) })
  }

  componentDidMount = () => {
    service().then((data) => {
      this.setInfo(data)
      this.setProducts(data)
      this.setTotal()
    })
  }

  render() {
    return (
      <>
        <Navigation />
        <Wrapper>
          <Grid title={this.state.title} data={this.state.products} />
          <Info total={this.state.total} data={this.state.infos} />
          <Button action={this.state.url} name={this.state.buttonName} />
        </Wrapper>
      </>
    )
  }
}
