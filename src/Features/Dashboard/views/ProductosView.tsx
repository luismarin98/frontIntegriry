import { FC, useContext, useState } from "react";
import { ProductoType } from "../../../Interfaces/ProductoType";
import { PAGINACION_COMPONENT } from "../../../Components/Paginacion";
import { PRODUCT_CARD_COMPONENT } from "../../../Components/ProductCard";
import { ModalForm } from "../../../Components/ModalForm";
import FormularioProducto from "../forms/formProducto";
import DashboardContext, { IDashboardContext } from "../provider";

const products: ProductoType[] = [
    {
        id: 1, nombre: 'Producto 1', precio: 29.99, imagen: 'https://via.placeholder.com/200', estado: true, fecha_creacion: '', id_compania: 1, id_proveedor: 1, peso: 10.5, stock: true, datos_auditoria: 'Ejemplo carta producto 1', fecha_vencimiento: ''
    },
    {
        id: 2, nombre: 'Producto 2', precio: 29.99, imagen: 'https://via.placeholder.com/200', estado: true, fecha_creacion: '', id_compania: 1, id_proveedor: 1, peso: 10.5, stock: true, datos_auditoria: 'Ejemplo carta producto 1', fecha_vencimiento: ''
    },
    {
        id: 3, nombre: 'Producto 3', precio: 29.99, imagen: 'https://via.placeholder.com/200', estado: true, fecha_creacion: '', id_compania: 1, id_proveedor: 1, peso: 10.5, stock: true, datos_auditoria: 'Ejemplo carta producto 1', fecha_vencimiento: ''
    }
];

export const PRODUCTOS_VIEW: FC = () => {
    const { isOpen, setIsOpen } = useContext(DashboardContext) as IDashboardContext;
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 4;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(products.length / productsPerPage);

    const handleOpenDialogNav = () => setIsOpen(!isOpen)

    return (
        <>
            <div className="container mx-auto p-4 flex items-center justify-center flex-col">
                <div className="flex items-center justify-between w-full">
                    <h1 className="text-2xl font-bold mb-4">Lista de Productos</h1>
                    <button className="px-6 py-1 shadow-neutral-800 bg-neutral-500 bg-opacity-30 md:bg-opacity-30 dark:bg-neutral-600 dark:bg-opacity-20 dark:hover:bg-opacity-30 backdrop-blur-md rounded-md">Agregar</button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> {currentProducts.map(product => (
                    <PRODUCT_CARD_COMPONENT key={product.id} product={product} />))}
                </div>
                <PAGINACION_COMPONENT currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            </div>
            <ModalForm isOpen={isOpen} closePromise={handleOpenDialogNav} dialog_title="Nuevo Producto">
                <FormularioProducto />
            </ModalForm>
        </>
    )
}