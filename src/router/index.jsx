import {BrowserRouter, Switch, Route} from 'react-router-dom'
import React from 'react'
import Login from '../routes/Login'
import Main from '../routes/Main'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/main" component={Main}></Route>
      </Switch>
    </BrowserRouter>
  )
}
export default Routes