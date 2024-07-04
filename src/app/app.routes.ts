import { Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { LibrosListarComponent } from './modules/libros/libros-listar/libros-listar.component';
import { AutoresListarComponent } from './modules/autores/autores-listar/autores-listar.component';
import { EditorialesListarComponent } from './modules/editoriales/editoriales-listar/editoriales-listar.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthCallbackComponent } from './shared/components/auth-callback/auth-callback.component';

export const routes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: 'login'
    },
    {
        path: 'login', component: LoginComponent
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
            },
            {
                path: 'editoriales', component: EditorialesListarComponent
            }
        ]
    },
    {
        path: 'auth-callback', component: AuthCallbackComponent
    }
    
];
