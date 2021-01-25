// would use a createAction helper in production
export const ADD_TO_CART = 'ADD_TO_CART'
export const addToCart = (id) => ({
  type: ADD_TO_CART,
  payload: { id }
})