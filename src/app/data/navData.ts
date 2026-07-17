import { Categorias } from "../enums/categorias";
import { CategoriasInterface } from "../interfaces/categorias-interface";
import { seccionesData } from "./seccionesData";


export const navData: CategoriasInterface[] = [
    
    {
        name: Categorias.accion,
        image: '',
        description: ''
    },
    {
        name: Categorias.aprendizaje,
        image: '',
        description: ''
    },
    {
        name: Categorias.autoayuda,
        image: '',
        description: ''
    },
    {
        name: Categorias.aventura,
        image: '',
        description: ''
    },
    {
        name: Categorias.cienciaFiccion,
        image: '',
        description: ''
    },
    {
        name: Categorias.clasico,
        image: '',
        description: ''
    },
    {
        name: Categorias.comedia,
        image: '',
        description: ''
    },
    {
        name: Categorias.comic,
        image: '',
        description: '',
        sections: seccionesData
    },
    {
        name: Categorias.espiritual,
        image: '',
        description: ''
    },
    {
        name: Categorias.fantasia,
        image: '',
        description: ''
    },
    {
        name: Categorias.infantil,
        image: '',
        description: ''
    },
    {
        name: Categorias.misterio,
        image: '',
        description: ''
    }
]