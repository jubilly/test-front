import React from 'react'
import { Component } from 'react'
import Form from './../components/Form'
import Info from '../components/Infos'
import Navigation from './../components/Navigation'
import Button from './../components/ButtonCTA'
import service from './../services/api'
import { Wrapper, Error, Title, Form__Wrapper, Form__input_group } from '../styles/styles'
import {
  validateStrings,
  validateCardNumber,
  validateData,
  validateCode
} from '../services/validateData'

export default class Payments extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Cartão de Crédito',
      url: 'thankYou',
      buttonName: 'Finalizar o pedido',
      cardNumber: '',
      customerName: '',
      validate: '',
      disabled: false,
      cvv: '',
      infos: [],
      errorCardNumber: '',
      errorCustomerName: '',
      errorDate: '',
      errorCvv: '',
      total: 0
    }
  }
  listCardNumber = (e) => {
    let cardNumber = validateCardNumber(e.target.value)
    if (cardNumber.length < 17) {
      this.setState({ errorCardNumber: 'Invalid Field' })
    } else {
      this.setState({ errorCardNumber: '' })
    }
    this.setState({ cardNumber: cardNumber })
  }
  listCustomerName = (e) => {
    let customerName = validateStrings(e.target.value)
    if (customerName.length < 3) {
      this.setState({ errorCustomerName: 'Invalid Field' })
    } else {
      this.setState({ errorCustomerName: '' })
    }
    this.setState({ customerName: customerName })
  }
  listDate = (e) => {
    let validate = validateData(e.target.value)
    if (validate.length < 4) {
      this.setState({ errorDate: 'Invalid Field' })
    } else {
      this.setState({ errorDate: '' })
    }
    this.setState({ validate: validate })
  }
  listCvv = (e) => {
    let cvv = validateCode(e.target.value)
    if (cvv.length < 1) {
      this.setState({ errorCvv: 'Invalid Field' })
    } else {
      this.setState({ errorCvv: '' })
    }
    this.setState({ cvv: cvv })
  }
  setInfo = (data) => {
    let shippingTotal = { name: 'Frete', value: data.shippingTotal },
      discount = { name: 'Desconto', value: -data.discount },
      subTotal = { name: 'Produtos', value: data.subTotal }
    this.setState({ infos: [...this.state.infos, subTotal, shippingTotal, discount] })
  }
  setTotal = () => {
    let sum = 0
    this.state.infos.map((item) => {
      return (sum = sum + item.value)
    })
    this.setState({ total: parseFloat(sum).toFixed(2) })
  }
  submit = () => {
    localStorage.setItem('customerName', this.state.customerName)
    localStorage.setItem('cardNumber', this.state.cardNumber.substr(13, 16))
    localStorage.setItem('date', this.state.validate)
  }
  componentDidMount = () => {
    service().then((data) => {
      this.setInfo(data)
      this.setTotal()
    })
  }
  render() {
    let link = '#',
      Card = this.state.cardNumber,
      Name = this.state.customerName,
      Cvv = this.state.cvv,
      Date = this.state.validate
    if (Card != '' && Name != '' && Cvv != '' && Date != '') link = 'thankYou'
    else link = '#'

    return (
      <>
        <Navigation />
        <Wrapper>
          <Title color={'#999'}>{this.state.title}</Title>
          <Form__Wrapper bkgcolor={'#fff'}>
            <Form__input_group size={'100%'}>
              <label htmlFor="numero-cartao">Número do cartão:</label>
              <input
                id="numero-cartao"
                type="text"
                placeholder="____.____.____.____"
                value={this.state.cardNumber}
                onChange={this.listCardNumber}
              />
              <Error>{this.state.errorCardNumber}</Error>
            </Form__input_group>
            <Form__input_group size={'100%'}>
              <label htmlFor="nome-titular">Nome do Titular:</label>
              <input
                id="nome-titular"
                type="text"
                placeholder="Como no cartão"
                value={this.state.customerName}
                onChange={this.listCustomerName}
              />
              <Error>{this.state.errorCustomerName}</Error>
            </Form__input_group>
            <Form__input_group size={'50%'}>
              <label htmlFor="validate">Validate (mês/ano):</label>
              <input
                id="validate"
                type="text"
                placeholder="__/____"
                value={this.state.validate}
                onChange={this.listDate}
              />
              <Error>{this.state.errorDate}</Error>
            </Form__input_group>
            <Form__input_group size={'45%'}>
              <label htmlFor="cvv">CVV:</label>
              <input
                id="cvv"
                type="text"
                placeholder="___"
                value={this.state.cvv}
                onChange={this.listCvv}
              />
              <Error>{this.state.errorCvv}</Error>
            </Form__input_group>
          </Form__Wrapper>
          <Info total={this.state.total} data={this.state.infos} />
          <Button action={link} name={this.state.buttonName} click={this.submit} />
        </Wrapper>
      </>
    )
  }
}
