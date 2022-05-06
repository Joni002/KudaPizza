import { configureStore } from '@reduxjs/toolkit'
import orderReducer from './order'

export default configureStore({
  reducer: {
    order: orderReducer,
  },
})