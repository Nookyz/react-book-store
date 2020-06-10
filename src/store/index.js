import {combineReducers, createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {bookReducer} from './reducers/book'
import {cartReducer} from './reducers/cart'


const rootReducer = combineReducers({
  book: bookReducer,
  cart: cartReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk))