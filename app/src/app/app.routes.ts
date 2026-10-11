import { Routes } from '@angular/router';
import { Catalogo } from './components/catalogo/catalogo';

export const routes: Routes = [
    { path: '', component: Catalogo },
    { path: 'catalogo', component: Catalogo }
];