import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const simCardSlice = createSlice({
    name: 'simCard',
    initialState: {
        simCard: {
            iccid: '',
            Status: '',
            defNumber: '',
            mobileOperator: '',
            tariff: '',
            lastActivation: new Date(),
            lastLocation: {
                lat: 0,
                lng: 0,
            },
            trafficForYesterday: 0
        }
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(addSimCardAsync.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(addSimCardAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.simCard = action.payload;
            })
            .addCase(addSimCardAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
})

// Define an async thunk for adding a SIM card
export const addSimCardAsync = createAsyncThunk(
    'simCard/addSimCard',
    async (simCardData, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:8080/automated-workstation-client-service/simCard', simCardData);
            return response.data; // Assuming the response data contains the updated SIM card details
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const {addSimCard } = simCardSlice.actions

export const selectSimCard = (state) => state.simCard
export const selectIccid = (state) => state.simCard.iccid
export const selectStatus = (state) => state.simCard.status
export const selectDefNumber = (state) => state.simCard.defNumber
export const selectMobileOperator = (state) => state.simCard.mobileOperator
export const selectTariff = (state) => state.simCard.tariff
export const selectLastActivation = (state) => state.simCard.lastActivation
export const selectLastLocation = (state) => state.simCard.lastLocation
export const selectTrafficForYesterday = (state) => state.simCard.trafficForYesterday

export default simCardSlice.reducer