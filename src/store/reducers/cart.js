import {
  ADD_TO_CART,
  DELETE_FROM_CARD,
  DELETE_ALL_BY_ID
} from '../types'

const initialState = {
  items: [],
  total: 0,
}

export const cartReducer = (state = initialState, action) => {

  switch(action.type){
    case ADD_TO_CART:
      const addedBook  = action.payload
      const existedBook = state.items.find((item) => action.id === item.id)
      
      if(existedBook){
        
        const objIndex = state.items.findIndex(obj => obj.id === action.id)
        const newObj = {
          ...existedBook, 
          quantity: existedBook.quantity + 1,
          totalPrice: existedBook.price * (existedBook.quantity + 1)
        }

        return {
          ...state,
          items: [
            ...state.items.slice(0, objIndex),
            newObj,
            ...state.items.slice(objIndex + 1),
          ],
          total: state.total + newObj.price
        }
      }
      
      const newObj = {...addedBook, quantity: 1, totalPrice: addedBook.price}
      return {
        ...state,
        items: [...state.items, newObj],
        total: state.total + newObj.price
      }
      case DELETE_FROM_CARD:
        const deletedBook = state.items.find((item) => action.id === item.id)
        const delObjIndex = state.items.findIndex(obj => obj.id === action.id)
        const delObj = {
          ...deletedBook, 
          quantity: deletedBook.quantity - 1,
          totalPrice: deletedBook.price * (deletedBook.quantity - 1)
        }
        return {
          ...state,
          items: [
            ...state.items.slice(0, delObjIndex),
            delObj,
            ...state.items.slice(delObjIndex + 1),
          ],
          total: state.total - delObj.price
        }
      case DELETE_ALL_BY_ID:
        const [deletedObj] = state.items.filter(item => item.id === action.id)
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.id),
          total: state.total - deletedObj.totalPrice
        }
    default:
      return state
  }
}