import {
  FETCH_BOOKS_DATA_REQUEST,
  SET_BOOKS_SUCCES,
} from '../types'

export const fetchBookDataRequest = () => ({
  type: FETCH_BOOKS_DATA_REQUEST,
})

export const setBooksSucces = books => ({
  type: SET_BOOKS_SUCCES,
  payload: books
})
