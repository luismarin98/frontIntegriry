import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { producto_slice } from "./Productos/productos.slice";
import { cliente_slice } from "./Client/client.slice";

const reducer = {
    productoState: producto_slice.reducer,
    clienteState: cliente_slice.reducer
}

export const store = configureStore({ reducer: reducer });

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AddDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;