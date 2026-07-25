import { Categorias } from "../enums/categorias";

export interface LibroInterface {
    id?: string;
    titulo: string;
    autor: string;
    sinopsis: string;
    imagen: string;
    categoria: Categorias | string;
    idioma: string;
    formato: string;
    cubierta: string;
    paginas: number;
    dimensiones: string;
    edicion: string;
    editorial: string;
    seccion?: string;
    proveedor: string;
    añoDePublicacion: number | string;
    isbn?: string;
    precioCompra: number;
    precioVenta: number;
    descuento?: number;
    disponible?: boolean;
    cantidad: number;
    estado?: string;
    fechaDeIngreso?: string;
    puntuacion?: number;
}
