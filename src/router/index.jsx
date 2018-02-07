import {BrowserRouter, Switch, Route} from 'react-router-dom'
import React from 'react'
import Home from '../pages/home'
import BasicLayout from '../pages/Main'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/users/list" component={BasicLayout}></Route>
      </Switch>
    </BrowserRouter>
  )
}
export default Routes