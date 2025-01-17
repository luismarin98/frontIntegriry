import { useContext, useEffect, MouseEvent } from 'react';
import { useForm } from 'react-hook-form';
import { ProductoType } from '../../../Interfaces/ProductoType';
import DashboardContext, { IDashboardContext } from '../provider';
import { useDispatch, useSelector } from 'react-redux';
import { productoSelector } from '../../../Redux/Productos/productos.selector';
import moment from 'moment';
import { getProducto } from '../../../Redux/Productos/productos.slice';

const FormularioProducto = () => {
    const { post, put, isEdit, setIsEdit, setIsOpen, isOpen } = useContext(DashboardContext) as IDashboardContext
    const producto = useSelector(productoSelector);
    const dispatch = useDispatch();

    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<ProductoType>();

    const submit = handleSubmit((data) => {
        data.fecha_creacion = new Date().toISOString();
        data.fecha_vencimiento = new Date().toISOString();

        isEdit ? put(data) : post(data);
        isEdit && setIsEdit(false);
        dispatch(getProducto(null));
        setIsOpen(!isOpen);
        reset();
    });

    const handle_cancel = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setIsOpen(!isOpen);
        dispatch(getProducto(null));
        reset();
    };

    useEffect(() => {
        producto !== null && reset(producto);
        producto !== null && setValue('fecha_vencimiento', moment(producto!.fecha_vencimiento).format("DD/MM/YYYY"));
    }, [producto, reset, setValue]);

    return (
        <div className="w-full">
            <form onSubmit={submit} className="grid grid-cols-1 gap-4">
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
                    <label htmlFor="estado" className="flex items-center">
                        <input
                            type="checkbox"
                            id="estado"
                            {...register('estado')}
                            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">Estado</span>
                    </label>
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
                    <label htmlFor="fecha_vencimiento" className="block text-sm font-medium text-gray-700">Fecha de Vencimiento</label>
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
                <button
                    onClick={handle_cancel}
                    className="w-full rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >Cancelar</button>
            </form>
        </div>
    );
};

export default FormularioProducto;
