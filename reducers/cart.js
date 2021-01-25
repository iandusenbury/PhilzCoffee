import { ADD_TO_CART } from '../actions/products'

const initialState = {
  items: {
    [1]: { quantity: 1 }
  }
}

function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case ADD_TO_CART:
      const { id } = payload
      const item = state.items[id]

      const quantity = item
        ? item.quantity + 1
        : 0

      return {
        items: {
          ...state.items,
          [id]: { quantity }
        },
      }

    default: return state
  }
}

export default reducer