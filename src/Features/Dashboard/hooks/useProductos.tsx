import { useState } from "react"
import { ProductoType } from "../../../Interfaces/ProductoType";
import axios from "axios";

export const useProductos = () => {
    const [producto, setProducto] = useState<ProductoType | undefined>();
    const [loading, setIsLoading] = useState<boolean>(false);

    const get = async () => {
        setIsLoading(true);
        await axios.get<ProductoType>(`${process.env.REACT_APP_RUTA_API}/productos`)
            .then((res) => {
                setProducto(res.data)
                //localStorage.setItem('cliente', JSON.stringify(res.data));
                setIsLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setIsLoading(false);
            });
    }

    const getID = async (id: number) => {
        setIsLoading(true);
        await axios.get(`${process.env.REACT_APP_RUTA_API}/productos/${id}`).then(
            (res) => {
                setProducto(res.data);
                setIsLoading(false);
            }
        ).catch(
            (err) => {
                console.error(err);
                setIsLoading(false);
            }
        );
    }

    const post = async (producto: ProductoType) => {
        setIsLoading(true);
        await axios.post(`${process.env.REACT_APP_RUTA_API}/producto`, { ...producto });
    }
    const put = async (producto: ProductoType) => {
        setIsLoading(true);
        await axios.put(`${process.env.REACT_APP_RUTA_API}/producto`, { ...producto });
    }

    const del = async (id: number) => {
        setIsLoading(true);
        await axios.delete(`${process.env.REACT_APP_RUTA_API}/producto/${id}`);
    }

    return { producto, loading, get, getID, post, put, del }
}