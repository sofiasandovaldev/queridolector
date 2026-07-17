import { SeccionComic } from "./secciones-interface";

export interface CategoriasInterface {

    name: string;
    image: string;
    description: string;
    sections?: SeccionComic[]

}