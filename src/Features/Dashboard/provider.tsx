import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { useProductos } from "./hooks/useProductos";
import { ProductoType } from "../../Interfaces/ProductoType";
import { NavigateFunction, useNavigate } from "react-router-dom";

export interface IDashboardContext {
    get: (id: number) => Promise<void>
    loading: boolean
    isEdit: boolean
    producto: ProductoType | undefined
    setIsEdit: Dispatch<SetStateAction<boolean>>
    getID: (id: number) => Promise<void>
    post: (producto: ProductoType) => Promise<void>
    put: (producto: ProductoType) => Promise<void>
    del: (id: number) => Promise<void>

    isOpen: boolean;
    navigate: NavigateFunction;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const DashboardContext = createContext({});

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
    const { get, getID, post, put, del, loading, producto } = useProductos();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isEdit, setIsEdit] = useState<boolean>(false);

    const navigate = useNavigate();

    const storage: IDashboardContext = { isEdit, setIsEdit, get, loading, producto, isOpen, setIsOpen, navigate, getID, post, put, del }

    return <DashboardContext.Provider value={storage}>{children}</DashboardContext.Provider>
}

export default DashboardContext;