// store.js
import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from '../silces/auth.silce'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  // other options e.g middleware, go here
})