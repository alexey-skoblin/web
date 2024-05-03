import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slices/CounterSlice'
import stringReducer from "../slices/StringSlice";
import simCardReducer from "../slices/SimCardSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        string: stringReducer,
        simCard: simCardReducer
    },
})