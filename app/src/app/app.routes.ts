import { Routes } from '@angular/router';
import { Catalogo } from './components/catalogo/catalogo';
import { Detalle } from './components/detalle/detalle';
import { Pedidos } from './components/pedidos/pedidos';

export const routes: Routes = [
    { path: '', component: Catalogo, children: [
        { path: 'producto/:id', component: Detalle }
    ] },
    { path: 'catalogo', component: Catalogo },
  { path: 'mis-pedidos', component: Pedidos }
];
