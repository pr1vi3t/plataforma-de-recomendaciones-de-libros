import { Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { LibrosListarComponent } from './modules/libros/libros-listar/libros-listar.component';
import { AutoresListarComponent } from './modules/autores/autores-listar/autores-listar.component';

export const routes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: 'principal'
    },
    {
        path: 'principal', component: MainLayoutComponent, children:[
            {
                path: '', pathMatch: 'full', redirectTo: 'inicio'
            },
            {
                path: 'inicio', component: HomeComponent
            },
            {
                path: 'libros', component: LibrosListarComponent
            },
            {
                path: 'autores', component: AutoresListarComponent
            }
        ]

    }
];
