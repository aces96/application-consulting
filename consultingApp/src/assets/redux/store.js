import { configureStore } from '@reduxjs/toolkit'

import  LawyerEmailReducer  from './slices/LawyerInfo'
import LawyerReducer from './slices/lawyers.slice'
import ClientInfoReducer from "./slices/clientInfo.slice"
import DemandeReducer from './slices/demande.slice'


export default configureStore({
    reducer: {
        LawyerEmailReducer,
        LawyerReducer,
        ClientInfoReducer,
        DemandeReducer
        
        
    }
})