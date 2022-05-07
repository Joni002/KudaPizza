import { createSlice } from '@reduxjs/toolkit'

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    getProduct: {},
    pushProduct: {}
  },
  reducers: {
    initProduct: (state, action) => {
        state.getProduct = action.payload
        state.pushProduct = state.getProduct
    },
    delIngredient: (state, action) => {
        state.pushProduct[delIngredient] = action.payload
    },
    addIngredient: (state, action) => {
        state.pushProduct[addIngredient] = action.payload
    },
    size: (state, action) => {
        state.pushProduct[size] = action.payload
    },
    dought: (state, action) => {
        state.pushProduct[dought] = action.payload
    }
   },
})

export const { initProduct, delIngredient, addIngredient, size, dought } = orderSlice.actions

export const selectPushProduct = (state) => state.order.value

export default orderSlice.reducer
