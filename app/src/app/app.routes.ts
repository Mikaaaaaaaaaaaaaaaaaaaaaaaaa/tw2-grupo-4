import { Routes } from '@angular/router';
import { Catalogo } from './components/catalogo/catalogo';
import { Detalle } from './components/detalle/detalle';

export const routes: Routes = [
    { path: '', component: Catalogo, children: [
        { path: 'producto/:id', component: Detalle }
    ] },
    { path: 'catalogo', component: Catalogo }
];