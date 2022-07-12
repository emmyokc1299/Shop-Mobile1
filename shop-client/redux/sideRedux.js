import {createSlice} from "@reduxjs/toolkit"


const sideSlice = createSlice({
    name: "side",
    initialState: {
        open: false,
        products: [],
        quantity: 0,
        total: 0,

    },
    reducers: {
        setOpen:(state, action) => {
            state.open = !state.open
        },
        addToCart: (state, action) => {
            state.quantity += 1
            state.products.push(action.payload)
            state.total += action.payload.price * action.payload.quantity
        }
    }
})

export const {setOpen, addToCart} = sideSlice.actions


export default sideSlice.reducer

