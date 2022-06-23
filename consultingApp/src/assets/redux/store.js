import { configureStore } from '@reduxjs/toolkit'

import  LawyerEmailReducer  from './slices/LawyerInfo'
import LawyerReducer from './slices/lawyers.slice'


export default configureStore({
    reducer: {
        LawyerEmailReducer,
        LawyerReducer
        
    }
})