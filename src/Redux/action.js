import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    product: []
}

const productSlice = createSlice({
    name: 'product', initialState: initialState, reducers: {
        AddToCart: (state, action) => {
            
            state.product = [...state.product, action.payload]
        },
        DeleteFromCart: (state, action) => {
            state.product = state.product.filter(product => product.id!== action.payload.id)
        }
    }
})
export const { AddToCart, DeleteFromCart } = productSlice.actions;
export default productSlice.reducer
