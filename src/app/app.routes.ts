import { Routes } from '@angular/router';
import { InicioComponent } from './vistas/inicio/inicio.component';
import { ContactoComponent } from './vistas/contacto/contacto.component';
import { MenuComponent } from './menu/menu.component';
import { AccionComponent } from './vistas/categorias/accion/accion.component';
import { AprendizajeComponent } from './vistas/categorias/aprendizaje/aprendizaje.component';
import { AutoayudaComponent } from './vistas/categorias/autoayuda/autoayuda.component';
import { AventuraComponent } from './vistas/categorias/aventura/aventura.component';
import { CienciaFiccionComponent } from './vistas/categorias/ciencia-ficcion/ciencia-ficcion.component';
import { ClasicoComponent } from './vistas/categorias/clasico/clasico.component';
import { ComicComponent } from './vistas/categorias/comic/comic.component';
import { EspiritualComponent } from './vistas/categorias/espiritual/espiritual.component';
import { FantasiaComponent } from './vistas/categorias/fantasia/fantasia.component';
import { InfantilComponent } from './vistas/categorias/infantil/infantil.component';
import { MisterioComponent } from './vistas/categorias/misterio/misterio.component';
import { NovelaJuvenilComponent } from './vistas/categorias/novela-juvenil/novela-juvenil.component';
import { ParanormalComponent } from './vistas/categorias/paranormal/paranormal.component';
import { PoesiaComponent } from './vistas/categorias/poesia/poesia.component';
import { RomanceComponent } from './vistas/categorias/romance/romance.component';
import { SuspensoComponent } from './vistas/categorias/suspenso/suspenso.component';
import { ThillerComponent } from './vistas/categorias/thiller/thiller.component';



export const routes: Routes = [
    {
        path: '', component: InicioComponent
    },
    {
        path: 'inicio', component: InicioComponent
    },
    {
        path: 'contacto', component: ContactoComponent
    },
    {
        path: 'menu', component: MenuComponent
    },


  // Categorias
    {
        path: 'accion', component: AccionComponent
    },
    {
        path: 'aprendizaje', component: AprendizajeComponent
    },
    {
        path: 'autoayuda', component: AutoayudaComponent
    },
    {
        path: 'aventura', component: AventuraComponent
    },
    {
        path: 'ciencia-ficcion', component: CienciaFiccionComponent
    },
    {
        path: 'clasico', component: ClasicoComponent
    },
    {
        path: 'comic', component: ComicComponent
    },
    {
        path: 'espiritual', component: EspiritualComponent
    },
    {
        path: 'fantasia', component: FantasiaComponent
    },
    {
        path: 'infantil', component: InfantilComponent
    },
    {
        path: 'misterio', component: MisterioComponent
    },
    {
        path: 'novela-juvenil', component: NovelaJuvenilComponent
    },
    {
        path: 'paranormal', component: ParanormalComponent
    },
    {
        path: 'poesia', component: PoesiaComponent
    },
    {
        path: 'romance', component: RomanceComponent
    },
    {
        path: 'suspenso', component: SuspensoComponent
    },
    {
        path: 'thiller', component: ThillerComponent
    },
    {
        path: '**', pathMatch: 'full', redirectTo: 'inicio'
    }
];
