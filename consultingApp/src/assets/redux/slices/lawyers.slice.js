import { createSlice } from '@reduxjs/toolkit'


let initialState = {
    lawyers: [],
    lawyerInfo: []
}

export const LawyerSlice = createSlice({    
  name: 'LawyerReducer',
  initialState,
  reducers: {
    addLawyers: (state, action)=>{
        return{...state.lawyers,
        lawyers: action.payload
        }
    },
    setLawyerInfo: (state,action)=>{
      return {
        ...state.lawyerInfo,
        lawyerInfo: action.payload 
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { addLawyers, setLawyerInfo} = LawyerSlice.actions

export default LawyerSlice.reducer