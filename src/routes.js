import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Cart from './pages/Cart'
import Payments from './pages/Payments'
import ThankYou from './pages/ThankYou'

const routes = () => (
  <Switch>
    <Route path="/payments" component={Payments} />
    <Route path="/thankYou" component={ThankYou} />
    <Route path="/" component={Cart} />
  </Switch>
)
export default routes
