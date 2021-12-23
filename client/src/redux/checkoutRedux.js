import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
    name: "checkout",
    initialState: {
        products: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        startPayment: (state, action) => {
            state.isFetching = true;
            state.error = false;
        },
        paymentSuccess: (state, action) => {
            state.isFetching = false;
            state.products = action.payload;
        },
        paymentFail: (state) => {
            state.isFetching = false;
            state.error = true
        },
    },
});

export const { startPayment } = checkoutSlice.actions;
export const { paymentSuccess } = checkoutSlice.actions;
export const { paymentFail } = checkoutSlice.actions;
export default checkoutSlice.reducer;
