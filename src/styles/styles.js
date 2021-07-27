import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import HelvicaNue from './../assets/fonts/Helvetica-Neue-LT-65-Medium.ttf'
import HelvicaNueBold from './../assets/fonts/Helvetica-Neue-LT-75-Bold.ttf'
import { device } from './device'

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Helvetica Neue';
    src: url(${HelvicaNue});
  }

  @font-face {
    font-family: 'Helvetica Neue';
    font-weight: bold;
    src: url(${HelvicaNueBold});
  }
  * {
    box-sizing: border-box;
    font-family: "Helvetica Neue";
    margin: 0;
    outline: 0;
    padding: 0;
  }
  body {
    -webkit-font-smoothing: antialiased !important;
    background-color: #eee;
    line-height: 16px;
  }
  `

export const Navigation__wrapper = styled.div`
  @media ${device.mobileS} {
    align-items: center;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
    display: flex;
    justify-content: space-between;
    height: 40px;
    padding: 0 40px;
    a {
      color: #ccc;
      display: inline;
      font-size: 13px;
      font-weight: 700;
      text-align: center;
      text-transform: uppercase;
      text-decoration: none;
      pointer-events: none;
      &.active {
        color: #ff7800;
      }
    }
  }
  @media ${device.tablet} {
    margin: 0 20%;
  }
`

export const Title = styled.h2`
  @media ${device.mobileS} {
    color: ${(props) => `${props.color}`};
    text-transform: uppercase;
    font-size: 14px;
    line-height: 17px;
    margin: 13px 21px 4px;
    height: 17px;
    vertical-align: middle;
    text-align: ${(props) => `${props.alignment}`};
  }
`

export const Wrapper = styled.div`
  @media ${device.mobileS} {
    margin: 0 9px 20px;
  }
  @media ${device.tablet} {
    margin: 0 20%;
  }
`

export const Grid__wrapper = styled.div`
  @media ${device.mobileS} {
    background-color: ${(props) => `${props.bkgcolor}`};
    border-radius: 3px;
    box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
    padding: 13px;
    margin-bottom: 20px;
  }
`

export const Info__wrapper = styled(Grid__wrapper)`
  border: 1px solid #ccc;
  box-shadow: none;
`
export const Info__total = styled.div`
  @media ${device.mobileS} {
    margin-top: 16px;
    span {
      font-weight: bold;
    }
  }
`

export const Grid__item = styled.div`
  @media ${device.mobileS} {
    border: 1px solid #eee;
    border-radius: 3px;
    padding: 10px 10px 13px;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    &:last-of-type {
      margin-bottom: 0;
    }
    div {
      display: flex;
      justify-content: ${(props) => `${props.align}`};
      align-items: center;
      flex-direction: column;
      p {
        font-size: 13px;
        width: 100%;
        text-align: left;
        &:nth-child(2) {
          display: ${(props) => `${props.show}`};
          text-align: right;
          font-weight: bold;
          font-size: 14px;
          white-space: nowrap;
        }
      }
    }
  }
`
export const Grid__info = styled(Grid__item)`
  padding: 0;
  display: block;
  @media ${device.mobileS} {
    div {
      flex-direction: row;
      margin: 8px 0;
    }
    div:nth-child(3) {
      color: #ff7800;
    }
  }
`
export const Grid__image = styled.div`
  @media ${device.mobileS} {
    div {
      width: 65px;
      height: 65px;
    }
    img {
      width: 100%;
      height: 100%;
    }
    @media ${device.tablet} {
      div {
        width: 100px;
        height: 100px;
      }
    }
  }
`
export const Form__Wrapper = styled.form`
  @media ${device.mobileS} {
    background-color: ${(props) => `${props.bkgcolor}`};
    border-radius: 3px;
    box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
    padding: 13px;
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    p {
      font-size: 14px;
      text-transform: uppercase;
      width: inherit;
      line-height: 17px;
    }
  }
`
export const Form__input_group = styled.div`
  @media ${device.mobileS} {
    width: ${(props) => `${props.size}`};
    margin-bottom: 28px;
    label {
      height: 23px;
      color: #ccc;
      font-size: 12px;
      font-weight: 700;
      line-height: 23px;
    }
    input {
      box-sizing: border-box;
      height: 45px;
      width: 100%;
      border-radius: 3px;
      border: 1px solid #e7e7e7;
      box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);
      padding-left: 13px;
      color: #212121;
      &:focus {
        border: 1px solid #a43287;
      }
      &::placeholder {
        color: #e0e7ee;
        font-size: 16px;
        letter-spacing: 1.37px;
        line-height: 19px;
      }
    }
  }
`

export const Error = styled.span`
  height: 14px;
  color: #f30;
  font-size: 12px;
  line-height: 14px;
`

export const Icon__Success = styled.div`
  height: 39.51px;
  width: 39.51px;
  border: 2px solid #ff7800;
  border-radius: 50%;
  margin: 10px auto;
  position: relative;
  transform-origin: center;
  transform: scale(1);
`
export const Icon = styled.div`
  display: block;
  position: absolute;
  height: 2px;
  background-color: #ff7800;
  border-radius: 10px;
`

export const Icon__SuccessTip = styled(Icon)`
  width: 10px;
  top: 21px;
  left: 7px;
  transform: rotate(45deg);
`
export const Icon__SuccessLong = styled(Icon)`
  width: 20px;
  top: 18px;
  left: 12px;
  transform: rotate(-45deg);
`
