import { ProductoType } from "../../Interfaces/ProductoType";

export interface ProductoState {
    producto_list: ProductoType[] | null,
    producto: ProductoType | null,
}

export const prodcuto_initialState: ProductoState = {
    producto_list: null,
    producto: null
}