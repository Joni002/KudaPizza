import { configureStore } from '@reduxjs/toolkit'
import orderReducer from './order'
import cartReducer from './cart'

export default configureStore({
  reducer: {
    order: orderReducer,
    cart: cartReducer,
  },
})