import { configureStore } from '@reduxjs/toolkit'

import  LawyerEmailReducer  from './slices/LawyerInfo'


export default configureStore({
    reducer: {
        LawyerEmailReducer,
        
    }
})