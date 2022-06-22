import { createSlice } from '@reduxjs/toolkit'


let initialState = {
    email: ''
}

export const LawyerIdSlice = createSlice({    
  name: 'LawyerIdReducer',
  initialState,
  reducers: {
    updateEmail: (state, action)=>{
        state.email = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateEmail} = LawyerIdSlice.actions

export default LawyerIdSlice.reducer