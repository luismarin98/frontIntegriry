import { useState } from "react"
import { ProductoResponse, ProductoType } from "../../../Interfaces/ProductoType";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { getProductos, getProducto } from "../../../Redux/Productos/productos.slice";

export const useProductos = () => {
    const [loading, setIsLoading] = useState<boolean>(false);
    const dispatch = useDispatch();

    const get = async () => {
        setIsLoading(true);
        const gt = axios.get<ProductoResponse>(`${process.env.REACT_APP_RUTA_API}/Producto`);
        toast.promise(gt, {
            loading: 'Obteniendo productos',
            success: (res) => {
                setIsLoading(false);
                dispatch(getProductos(res.data.producto));
                return 'datos cargados con exito';
            },
            error: (err) => err.response!.data
        })
    }

    const getID = async (id: number) => {
        setIsLoading(true);
        const gt_id = axios.get(`${process.env.REACT_APP_RUTA_API}/Producto/${id}`);
        toast.promise(gt_id, {
            loading: 'Obteniendo informacion',
            success: (res) => {
                dispatch(getProducto(res.data));
                setIsLoading(false);
                return 'Datos cargados exitosamente';
            },
            error: (err) => err.response!.data
        })
    }

    const post = async (producto: ProductoType) => {
        setIsLoading(true);
        const res = axios.post(`${process.env.REACT_APP_RUTA_API}/Producto`, { ...producto });
        toast.promise(res, {
            loading: 'Guardando producto',
            success: (res) => {
                if (res.status === 200) return 'Producto guardado con exito'
                setIsLoading(false);
                return 'Algo sucedio, intente nuevamente'
            },
            error: (err) => err.response!.data
        })
    }
    
    const put = async (producto: ProductoType) => {
        setIsLoading(true);
        const res = axios.put(`${process.env.REACT_APP_RUTA_API}/Producto`, { ...producto });
        toast.promise(res, {
            loading: 'Guardando producto',
            success: (res) => {
                if (res.status === 200) return 'Producto guardado con exito'
                setIsLoading(false);
                return 'Algo sucedio, intente nuevamente'
            },
            error: (err) => err.response!.data
        })
    }

    const del = async (id: number) => {
        setIsLoading(true);
        const res = axios.delete(`${process.env.REACT_APP_RUTA_API}/Producto/${id}`);
        toast.promise(res, {
            loading: 'Guardando producto',
            success: (res) => {
                if (res.status === 200) return 'Producto guardado con exito'
                setIsLoading(false);
                return 'Algo sucedio, intente nuevamente'
            },
            error: (err) => err.response!.data
        })
    }

    return { loading, get, getID, post, put, del }
}