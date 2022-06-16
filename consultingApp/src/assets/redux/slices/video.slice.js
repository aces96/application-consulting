import { createSlice } from '@reduxjs/toolkit'


let initialState = {
    repas: []
}

export const cartSlice = createSlice({
  name: 'mealReducer',
  initialState,
  reducers: {
    updateCart: (state, action)=>{
        return {
          ...state.repas,
          repas: action.payload
        }
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateCart} = cartSlice.actions

export default cartSlice.reducer