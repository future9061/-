import { createSlice } from '@reduxjs/toolkit'

const ImgState = createSlice({
  name: 'ImgState',
  initialState: '',
  reducers: {
    changeImg(state, action) {
      return state = action.payload
    }
  }
})

export const { changeImg } = ImgState.actions

export default ImgState;