import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../../src/redux/features/counterSlice'


export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})