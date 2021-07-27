import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const Strict = () => (
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
)

ReactDOM.render(<Strict />, document.getElementById('root'))
