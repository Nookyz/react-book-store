import {
  ADD_TO_CART,
  DELETE_FROM_CARD,
  DELETE_ALL_BY_ID
} from '../types'

export const addToCart = (obj, id) => ({
  type: ADD_TO_CART,
  payload: obj,
  id
})
export const deleteFromCard = id => ({
  type: DELETE_FROM_CARD,
  id
})

export const deleteById = id => ({
  type: DELETE_ALL_BY_ID,
  id
})