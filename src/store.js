import { configureStore } from '@reduxjs/toolkit'
import videoDataReducer from './slice/videoDataSlice'

export const store = configureStore({
  reducer: {
    videoData:videoDataReducer,
  },
})