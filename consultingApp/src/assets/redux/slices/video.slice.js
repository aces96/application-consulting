import { createSlice } from '@reduxjs/toolkit'


let initialState = {
    stream: '',
    myId: undefined,
    caller: undefined,
    setCallerSignal: undefined,
    receivingCall: false,
    calling: false,
    callAccepted: false,
    callRejected: false,
}

export const cartSlice = createSlice({    
  name: 'mealReducer',
  initialState,
  reducers: {
    setStream: (state, action)=>{
          state.stream = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateCart} = cartSlice.actions

export default cartSlice.reducer