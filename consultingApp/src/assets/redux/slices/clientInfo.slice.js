import { createSlice } from '@reduxjs/toolkit'


let initialState = {
    email: ''
}

export const clientInfoSlice = createSlice({    
  name: 'clientInfoReducer',
  initialState,
  reducers: {
    addEmail: (state, action)=>{
        return{...state.email,
          email: action.payload
        }
    }
  },
})

// Action creators are generated for each case reducer function
export const { addEmail } = clientInfoSlice.actions

export default clientInfoSlice.reducer