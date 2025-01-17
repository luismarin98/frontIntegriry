import { createSlice } from "@reduxjs/toolkit";
import { cliente_initialState, ClienteState } from "./client.state";

const cliente_slice = createSlice({
    name: 'cliente_slice',
    initialState: cliente_initialState,
    reducers: {
        getCliente: (state: ClienteState, action) => { if (action.payload !== null) state.cliente = action.payload },
        getListaClientes: (state: ClienteState, action) => { if (action.payload !== null) state.lista_clientes = action.payload }
    }
})

export const { getCliente, getListaClientes } = cliente_slice.actions;
export { cliente_slice }