import { createSlice } from '@reduxjs/toolkit'


let initialState = {
    lawyers: []
}

export const LawyerSlice = createSlice({    
  name: 'LawyerReducer',
  initialState,
  reducers: {
    addLawyers: (state, action)=>{
        return{...state.lawyers,
        lawyers: action.payload
        }
    }
  },
})

// Action creators are generated for each case reducer function
export const { addLawyers} = LawyerSlice.actions

export default LawyerSlice.reducer