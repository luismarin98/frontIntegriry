import { createSlice } from "@reduxjs/toolkit";
import { prodcuto_initialState, ProductoState } from "./productos.state";

const producto_slice = createSlice({
    name: 'producto_slice',
    initialState: prodcuto_initialState,
    reducers: {
        getProductos: (state: ProductoState, action) => { if (action.payload !== null) state.producto_list = action.payload },
        getProducto: (state: ProductoState, action) => { if (action.payload !== null) state.producto = action.payload }
    }
})

export const { getProductos, getProducto } = producto_slice.actions;
export { producto_slice }