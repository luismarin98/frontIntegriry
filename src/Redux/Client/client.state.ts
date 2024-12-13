import { ClienteType } from "../../Interfaces/ClienteType";


export interface ClienteState {
    lista_clientes: ClienteType[] | null,
    cliente: ClienteType | null,
}

export const cliente_initialState: ClienteState = {
    lista_clientes: null,
    cliente: null
}