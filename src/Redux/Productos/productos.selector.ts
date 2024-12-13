import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ProductoState } from "./productos.state";

const producto_state = (state: RootState) => state.productoState;

export const productoSelector = createSelector(producto_state, (state: ProductoState) => { return state.producto });
export const ListaProductosSelector = createSelector(producto_state, (state: ProductoState) => { return state.producto_list });