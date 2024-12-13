import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ClienteState } from "./client.state";

const cliente_state = (state: RootState) => state.clienteState;

export const cliente_selector = createSelector(cliente_state, (state: ClienteState) => { return state.cliente });

export const listaClientes_selector = createSelector(cliente_state, (state: ClienteState) => { return state.lista_clientes });