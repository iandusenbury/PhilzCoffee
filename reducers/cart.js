import { ADD_TO_CART } from '../actions/products'
import { INC_ITEM_QUANTITY, DEC_ITEM_QUANTITY, REMOVE_ITEM } from '../actions/cart'

import createReducer from './createReducer'

const initialState = {
  items: {
    [1]: { id: 1, quantity: 1 }
  }
}

const handlers = {
  [ADD_TO_CART]: addToCart,
  [INC_ITEM_QUANTITY]: incQuantity,
  [DEC_ITEM_QUANTITY]: decQuantity,
  [REMOVE_ITEM]: removeItem,
}

export default createReducer(initialState, handlers)

function addToCart (state, { payload }) {
  const { id } = payload
  const item = state.items[id]

  const quantity = item
    ? item.quantity + 1
    : 0

  return {
    items: {
      ...state.items,
      [id]: { id, quantity }
    },
  }
}

function incQuantity (state, { payload }) {
  const { id } = payload
  const item = state.items[id]

  return {
    items: {
      ...state.items,
      [id]: { id, quantity: item.quantity + 1 }
    },
  }
}

function decQuantity (state, { payload }) {
  const { id } = payload
  const item = state.items[id]

  const newQuantity = item.quantity - 1

  // would do a check here, or potentially elsewhere
  // to remove the item if it is 0

  return {
    items: {
      ...state.items,
      [id]: { id, quantity: newQuantity }
    },
  }
}

function removeItem (state, { payload }) {
  const { id } = payload
  const items = state.items

  return {
    items: Object.keys(items).reduce((acc, curr) => {
      if (curr.id === id) return acc
      return {
        ...acc,
        curr,
      }
    }, {})
  }
}
