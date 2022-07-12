import { configureStore } from "@reduxjs/toolkit";

import sideReducer from './sideRedux'

export const store = configureStore({
    reducer: {
        side: sideReducer
    }
})