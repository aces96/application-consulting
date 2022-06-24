import { createSlice } from '@reduxjs/toolkit'


let initialState = {
    demande: []
}

export const DemandeSlice = createSlice({    
  name: 'demandeReducer',
  initialState,
  reducers: {
    addDemandes: (state, action)=>{
        return{...state.demande,
            demande: action.payload
        }
    }
  },
})

// Action creators are generated for each case reducer function
export const { addDemandes} = DemandeSlice.actions

export default DemandeSlice.reducer