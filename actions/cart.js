// would use a createAction helper in production
export const INC_ITEM_QUANTITY = 'INC_ITEM_QUANTITY'
export const incItemQuantity = (id) => ({
  type: INC_ITEM_QUANTITY,
  payload: { id }
})

export const DEC_ITEM_QUANTITY = 'DEC_ITEM_QUANTITY'
export const decItemQuantity = (id) => ({
  type: DEC_ITEM_QUANTITY,
  payload: { id }
})

export const REMOVE_ITEM = 'REMOVE_ITEM'
export const removeItem = (id) => ({
  type: REMOVE_ITEM,
  payload: { id }
})