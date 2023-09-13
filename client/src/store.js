import { configureStore } from '@reduxjs/toolkit'

import ImgState from './store/ImgSlice'

export default configureStore({
  reducer: {
    ImgState: ImgState.reducer
  }
}) 