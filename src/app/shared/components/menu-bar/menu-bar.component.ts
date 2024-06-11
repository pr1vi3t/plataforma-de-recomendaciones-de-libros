import { Component} from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [MenubarModule, ButtonModule, ToastModule, MenuModule],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss'
})
export class MenuBarComponent {

  itemsMenuBar: MenuItem[] | undefined;
  itemsMenuUsuario: MenuItem[] | undefined;

  ngOnInit() {
    this.itemsMenuUsuario = [
      {
        label: 'Options',
        items: [
          {
            label: 'Refresh',
            icon: 'pi pi-refresh'
          },
          {
            label: 'Export',
            icon: 'pi pi-upload'
          }
        ]
      }
    ];
    this.itemsMenuBar = [
      
        {
            label: 'Autenticación',
            icon: 'pi pi-unlock',
            items: [
                {
                    label: 'Iniciar Sesion',
                    icon: 'pi pi-lock-open'
                },
                {
                    label: 'Crear Cuenta',
                    icon: 'pi pi-user-plus'
                }
            ]
        },
        {
            label: 'Librería',
            icon: 'pi pi-shop',
            items: [
              {
                label: 'Libros',
                icon: 'pi pi-book',
                routerLink: '/principal/libros'
            },
            {
                label: 'Categorias',
                icon: 'pi pi-bookmark'
            },
            {
              label: 'Autores',
              icon: 'pi pi-pencil',
              routerLink: '/principal/autores'
            },
            {
              label: 'Editoriales',
              icon: 'pi pi-file-edit'
            },
            ]
        },
        {
            label: 'Comunidad',
            icon: 'pi pi-home',
            items: [
            {
                label: 'Comentarios',
                icon: 'pi pi-comments'
            },
            {
              label: 'Recomendaciones',
              icon: 'pi pi-plus-circle'
            }
            ]
        },
        {
          label: 'Administrador',
          icon: 'pi pi-cog',
          items: [
            {
              label: 'Usuarios',
              icon: 'pi pi-users'
            },
            {
              label: 'Bitacora',
              icon: 'pi pi-clipboard'
            }
          ]
        }
    ]
}
}
