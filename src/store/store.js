import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slices/CounterSlice'
import stringReducer from "../slices/StringSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        string: stringReducer,
    },
})