import { configureStore } from '@reduxjs/toolkit'
import LoginReducer from './slices/auth/login'
import RegisterReducer from './slices/auth/registre.slice'


export default configureStore({
    reducer: {
        LoginReducer,
        RegisterReducer
        
    }
})