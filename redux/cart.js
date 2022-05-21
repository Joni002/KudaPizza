import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    orders: []
  },
  reducers: {
    addToOrder: (state, action) => {
        state.orders.push(action.payload)
    },
   },
})

export const { addToOrder } = cartSlice.actions


export default cartSlice.reducer
