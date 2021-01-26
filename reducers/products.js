import { products, productIds } from '../store/mockData'
import createReducer from './createReducer'

// set mock data in initial state
const initialState = {
  products,
  productIds,
}

const handlers = {}

export default createReducer(initialState, handlers)