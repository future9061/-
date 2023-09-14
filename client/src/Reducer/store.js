import { configureStore } from '@reduxjs/toolkit'

import ImgState from './ImgSlice.js'
import userSlice from './userSlice.js'

export default configureStore({
  reducer: {
    ImgState: ImgState.reducer,
    user: userSlice.reducer
  }
}) 