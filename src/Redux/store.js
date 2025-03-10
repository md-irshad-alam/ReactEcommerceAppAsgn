import { configureStore } from "@reduxjs/toolkit";

import productReducer from './action'

export const store = configureStore({
    reducer: {
        products: productReducer
    }

})
 