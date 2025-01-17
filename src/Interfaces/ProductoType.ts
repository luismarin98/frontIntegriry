export interface ProductoType {
    id: number;
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


export interface ProductoResponse {
    totalRegistros: number;
    producto: ProductoType[] | null;
}