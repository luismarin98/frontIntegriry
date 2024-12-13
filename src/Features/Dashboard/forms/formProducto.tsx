import React from 'react';
import { useForm } from 'react-hook-form';
import { ProductoType } from '../../../Interfaces/ProductoType';

const FormularioProducto = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ProductoType>({
        defaultValues: {
            id: 1,
            nombre: 'Producto 1',
            precio: 29.99,
            imagen: 'https://via.placeholder.com/200',
            estado: true,
            fecha_creacion: '',
            id_compania: 1,
            id_proveedor: 1,
            peso: 10.5,
            stock: true,
            datos_auditoria: 'Ejemplo carta producto 1',
            fecha_vencimiento: '',
        },
    });

    const onSubmit = (data: ProductoType) => {
        console.log('Datos del formulario:', data);
    };

    return (
        <div className="w-full">
            <h1 className="text-2xl font-bold mb-4">Formulario de Producto</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4">
                <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                        Nombre
                    </label>
                    <input
                        type="text"
                        id="nombre"
                        {...register('nombre', { required: 'Este campo es obligatorio' })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre.message}</p>}
                </div>
                <div>
                    <label htmlFor="precio" className="block text-sm font-medium text-gray-700">
                        Precio
                    </label>
                    <input
                        type="number"
                        id="precio"
                        {...register('precio', { required: 'Este campo es obligatorio', valueAsNumber: true })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    {errors.precio && <p className="text-red-500 text-sm">{errors.precio.message}</p>}
                </div>
                <div>
                    <label htmlFor="imagen" className="block text-sm font-medium text-gray-700">
                        URL de la Imagen
                    </label>
                    <input
                        type="url"
                        id="imagen"
                        {...register('imagen', { required: 'Este campo es obligatorio' })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    {errors.imagen && <p className="text-red-500 text-sm">{errors.imagen.message}</p>}
                </div>
                <div>
                    <label htmlFor="peso" className="block text-sm font-medium text-gray-700">
                        Peso
                    </label>
                    <input
                        type="number"
                        id="peso"
                        {...register('peso', { required: 'Este campo es obligatorio', valueAsNumber: true })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    {errors.peso && <p className="text-red-500 text-sm">{errors.peso.message}</p>}
                </div>
                <div>
                    <label htmlFor="estado" className="block text-sm font-medium text-gray-700">
                        Estado
                    </label>
                    <select
                        id="estado"
                        {...register('estado', { required: 'Este campo es obligatorio' })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    >
                        <option value='true'>Activo</option>
                        <option value='false'>Inactivo</option>
                    </select>
                    {errors.estado && <p className="text-red-500 text-sm">{errors.estado.message}</p>}
                </div>
                <div>
                    <label htmlFor="stock" className="flex items-center">
                        <input
                            type="checkbox"
                            id="stock"
                            {...register('stock')}
                            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">¿En stock?</span>
                    </label>
                </div>
                <div>
                    <label htmlFor="datos_auditoria" className="block text-sm font-medium text-gray-700">
                        Datos de Auditoría
                    </label>
                    <textarea
                        id="datos_auditoria"
                        {...register('datos_auditoria', { required: 'Este campo es obligatorio' })}
                        rows={4}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    {errors.datos_auditoria && <p className="text-red-500 text-sm">{errors.datos_auditoria.message}</p>}
                </div>
                <div>
                    <label htmlFor="fecha_vencimiento" className="block text-sm font-medium text-gray-700">
                        Fecha de Vencimiento
                    </label>
                    <input
                        type="date"
                        id="fecha_vencimiento"
                        {...register('fecha_vencimiento', { required: 'Este campo es obligatorio' })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    {errors.fecha_vencimiento && <p className="text-red-500 text-sm">{errors.fecha_vencimiento.message}</p>}
                </div>
                <button
                    type="submit"
                    className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Guardar
                </button>
            </form>
        </div>
    );
};

export default FormularioProducto;
