import { products, productIds } from '../store/mockData'
const initialState = {
  products,
  productIds,
}

function reducer(state = initialState, action) {
  switch(action.type) {
    default: return state
  }
}

export default reducer