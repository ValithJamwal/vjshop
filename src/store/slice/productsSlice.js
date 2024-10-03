import { createSlice } from "@reduxjs/toolkit";

// Create products slice
const productsSlice = createSlice({
    name: 'products',
    initialState: {
        loading: false,
        data: null,
        error: null,
    },
    reducers: {
        productRequest(state) {
            state.loading = true;
        },
        productSuccess(state, action) {
            state.loading = false;
            state.data = action.payload.products;
        },
        productsFail(state, action) {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

// Export actions and reducer
const { actions, reducer } = productsSlice;
export const { productRequest, productSuccess, productsFail } = actions;
export default reducer;
