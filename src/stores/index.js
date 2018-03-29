import {createStore, combineReducers, applyMiddleware} from 'redux'
import * as header from './header/reducer'
import middlewares from './middlewares'

console.log({...header})
export default createStore(
  combineReducers({...header}),
  applyMiddleware(...middlewares)
)
