export interface ProductoType {
    id: number;
    id_compania: number;
    id_proveedor: number;
    nombre: string | null;
    fecha_creacion: string;
    fecha_vencimiento: string | null;
    peso: number;
    precio: number;
    estado: boolean;
    stock: boolean;
    imagen: string | null;
    datos_auditoria: string | null;
}