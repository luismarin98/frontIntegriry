import { FC, useContext, useEffect, useState } from "react";
import { ProductoType } from "../../../Interfaces/ProductoType";
import { PAGINACION_COMPONENT } from "../../../Components/Paginacion";
import { PRODUCT_CARD_COMPONENT } from "../../../Components/ProductCard";
import { ModalForm } from "../../../Components/ModalForm";
import FormularioProducto from "../forms/formProducto";
import DashboardContext, { IDashboardContext } from "../provider";
import { ListaProductosSelector } from "../../../Redux/Productos/productos.selector";
import { useAppSelector } from "../../../Redux/store";

export const PRODUCTOS_VIEW: FC = () => {
    const { isOpen, setIsOpen, get } = useContext(DashboardContext) as IDashboardContext;
    useEffect(() => { get() }, [])
    const productos = useAppSelector(ListaProductosSelector);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 4;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

    const currentProducts: ProductoType[] = productos ? productos.slice(indexOfFirstProduct, indexOfLastProduct) : [];
    const total_Pages: number = productos ? Math.ceil(productos.length / productsPerPage) : 1;

    const handleOpenDialogNav = () => setIsOpen(prev => !prev);

    return (
        <>
            <div className="container mx-auto p-4 flex items-center justify-center flex-col shadow-neutral-800 bg-neutral-500 bg-opacity-30 
                       md:bg-opacity-30 dark:bg-neutral-600 dark:bg-opacity-20 backdrop-blur-md rounded-md">
                <div className="flex items-center justify-between w-full">
                    <h1 className="text-2xl font-bold mb-4">Lista de Productos</h1>
                    <button className="px-6 py-1 bg-neutral-50 rounded-md hover:bg-neutral-200" onClick={handleOpenDialogNav}>Agregar</button>
                </div>
                {
                    currentProducts.length > 0 ? (
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {currentProducts.map(product => (<PRODUCT_CARD_COMPONENT key={product.id} product={product} />))}
                            </div>
                            <PAGINACION_COMPONENT
                                currentPage={currentPage}
                                totalPages={total_Pages}
                                onPageChange={setCurrentPage}
                            />
                        </>
                    ) : (<p className="text-xl font-bold">Sin datos</p>)
                }

            </div>
            <ModalForm isOpen={isOpen} closePromise={handleOpenDialogNav} dialog_title="Nuevo Producto">
                <FormularioProducto />
            </ModalForm>
        </>
    );
};
