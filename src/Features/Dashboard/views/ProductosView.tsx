import { FC, MouseEvent, useContext, useState } from "react";
import { ProductoType } from "../../../Interfaces/ProductoType";
import { PAGINACION_COMPONENT } from "../../../Components/Paginacion";
import { PRODUCT_CARD_COMPONENT } from "../../../Components/ProductCard";
import { ModalForm } from "../../../Components/ModalForm";
import FormularioProducto from "../forms/formProducto";
import DashboardContext, { IDashboardContext } from "../provider";
import { ListaProductosSelector } from "../../../Redux/Productos/productos.selector";
import { useAppSelector } from "../../../Redux/store";
import { ButtonComponent } from "../../../Components/ButtonComponent";

export const PRODUCTOS_VIEW: FC = () => {
    const { isOpen, setIsOpen, get } = useContext(DashboardContext) as IDashboardContext;

    const productos = useAppSelector(ListaProductosSelector);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 5;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

    const currentProducts: ProductoType[] | null = Array.isArray(productos) ? productos.slice(indexOfFirstProduct, indexOfLastProduct) : [];
    const total_Pages: number = Array.isArray(productos) ? Math.ceil(productos.length / productsPerPage) : 1;

    const handleOpenDialogNav = () => setIsOpen(!isOpen);

    const handle_getAllProductos = (event: MouseEvent<HTMLButtonElement>) => { event.preventDefault(); get(); }

    return (
        <>
            <div className="container mx-auto p-4 flex items-center justify-center flex-col shadow-neutral-800 bg-neutral-500 bg-opacity-30 md:bg-opacity-30 dark:bg-neutral-600 dark:bg-opacity-20 backdrop-blur-md rounded-md">
                <div className="flex items-center justify-between w-full">
                    <h1 className="text-2xl font-bold mb-4 text-white">Lista de Productos</h1>
                    <div className="flex  flex-row justify-center items-center gap-2 p-1">
                        <ButtonComponent onClick={handleOpenDialogNav} children="Agregar" />
                        <ButtonComponent onClick={handle_getAllProductos}><span className="material-symbols-outlined">restart_alt</span></ButtonComponent>
                    </div>
                </div>
                {
                    currentProducts && currentProducts.length > 0 ? (
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
                    ) : (<p className="text-sm font-semibold text-white">Sin datos registrados, seleccione el boton de recarga para poder mostrar los datos</p>)
                }

            </div>
            <ModalForm isOpen={isOpen} closePromise={handleOpenDialogNav} dialog_title="Nuevo Producto">
                <FormularioProducto />
            </ModalForm>
        </>
    );
};
