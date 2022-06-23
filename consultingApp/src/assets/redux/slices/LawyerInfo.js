import { createSlice } from '@reduxjs/toolkit'


let initialState = {
    email: ''
}

export const LawyerEmailSlice = createSlice({    
  name: 'LawyerIdReducer',
  initialState,
  reducers: {
    updateEmail: (state, action)=>{
        return{...state.email,
          email: action.payload
        }
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateEmail} = LawyerEmailSlice.actions

export default LawyerEmailSlice.reducer