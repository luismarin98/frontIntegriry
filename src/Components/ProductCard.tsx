import { MouseEvent, useContext } from "react";
import DashboardContext, { IDashboardContext } from "../Features/Dashboard/provider";
import { ProductoType } from "../Interfaces/ProductoType";
import { getProducto } from "../Redux/Productos/productos.slice";
import { useDispatch } from "react-redux";

export const PRODUCT_CARD_COMPONENT = ({ product }: { product: ProductoType }) => {
    const { isOpen, setIsOpen, del, setIsEdit } = useContext(DashboardContext) as IDashboardContext;
    const dispatch = useDispatch();

    const handle_edit = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        dispatch(getProducto(product));
        setIsOpen(!isOpen);
        setIsEdit(true);
    }

    const handle_del = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        del(product.id);
    }

    return (
        <div className="shadow-neutral-800 bg-neutral-500 bg-opacity-30 md:bg-opacity-30 dark:bg-neutral-600 dark:bg-opacity-50 backdrop-blur-md rounded-md p-4 flex flex-col w-full">
            <div className="w-full flex flex-row gap-2">
                <div className="flex justify-center items-center">
                    <img src={product.imagen!} alt={product.nombre!} className="w-full h-48 object-cover rounded-md md:w-32 md:h-32" />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="mt-4 flex-grow">
                        <h2 className="text-lg font-semibold text-white">{product.nombre}</h2>
                        <p className="text-white mt-2">{product.datos_auditoria}</p>
                    </div>
                    <div className="mt-4">
                        <p className="text-white font-bold">${product.precio}</p>
                    </div>
                    <div className="flex flex-col justify-center gap-2">
                        <button onClick={handle_edit} className="px-6 py-0.1 bg-transparent ring-1 ring-white rounded-md text-white hover:bg-neutral-50 hover:bg-opacity-20">Editar</button>
                        <button onClick={handle_del} className="px-6 py-0.1 bg-transparent ring-1 ring-white rounded-md text-white hover:bg-neutral-50 hover:bg-opacity-20">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}