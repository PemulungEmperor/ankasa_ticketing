import { createSlice } from "@reduxjs/toolkit";

const flightSlicer = createSlice({
    name : 'flights',
    initialState: {isPending : false, isError : false},
    dataFlights : {
        id : "",
        airlines: "",
        transit_type: "",
        luggage : null,
        meal : null,
        wifi : null,
        departure: "",
        arrived : "",
        ticket_price: 0,
        departure_date: "",
        arrive_date: "",
        photo_path: "",
        departure_city: "",
        arrive_city: "",
    },
    reducers: {
        getFlight: (state, action) => {
            state.dataFlights = action.payload
        },
        getFlightSearch: (state, action) => {
            state.dataFlights = action.payload
        },
        updateFlightData: (state, action) => {
            state.dataFlights = action.payload
        }
    }
})

export const {getFlight, getFlightSearch} = flightSlicer.actions
export default flightSlicer.reducer