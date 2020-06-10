import {
  FETCH_BOOKS_DATA_REQUEST,
  SET_BOOKS_SUCCES,
} from '../types'

const initialState = {
  books: [],
  loading: false
}

export const bookReducer = (state = initialState, action) => {

  switch(action.type){
    case FETCH_BOOKS_DATA_REQUEST:
      return {
        ...state,
        loading: true
      }
    case SET_BOOKS_SUCCES:
      return {
        ...state,
        books: action.payload,
        loading: false
      }
    default:
      return state
  }
}