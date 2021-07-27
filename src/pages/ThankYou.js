import React, { Component } from 'react'
import Navigation from './../components/Navigation'
import Info from '../components/Infos'
import Grid from '../components/Products'
import service from './../services/api'
import Form from '../components/Form'
import {
  Wrapper,
  Title,
  Icon__Success,
  Icon__SuccessTip,
  Icon__SuccessLong
} from '../styles/styles'

export default class ThankYou extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messageSuccess: 'Compra efetuada com sucesso',
      title: 'Pagamento',
      titleProdutos: 'Produtos',
      showPrice: 'none',
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
  getDataSuccess = () => {
    let name = { value: localStorage.getItem('customerName') },
      card = { value: '****.****.****.' + localStorage.getItem('cardNumber') },
      date = { value: localStorage.getItem('date') }
    this.setState({ data: [...this.state.data, card, name, date] })
  }
  componentDidMount = () => {
    service().then((data) => {
      this.setInfo(data)
      this.setProducts(data)
      this.setTotal()
    })
    this.getDataSuccess()
  }
  render() {
    return (
      <>
        <Navigation />
        <Wrapper>
          <Icon__Success>
            <Icon__SuccessTip></Icon__SuccessTip>
            <Icon__SuccessLong></Icon__SuccessLong>
          </Icon__Success>
          <Title alignment={'center'} color={'#ff7800'}>
            {this.state.messageSuccess}
          </Title>
          <Form title={this.state.title} data={this.state.data} />
          <Grid
            title={this.state.titleProdutos}
            data={this.state.products}
            show={this.state.showPrice}
          />
          <Info total={this.state.total} data={this.state.infos} />
        </Wrapper>
      </>
    )
  }
}
