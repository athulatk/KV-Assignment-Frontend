import {configureStore} from '@reduxjs/toolkit'
import { EmployeeAPI } from '../services/EmployeeAPI'

export const store = configureStore({
    reducer:{
        [EmployeeAPI.reducerPath]: EmployeeAPI.reducer,
    }
})