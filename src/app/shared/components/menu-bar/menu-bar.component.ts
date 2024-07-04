import { Component} from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { GoogleApiService } from '../../../core/services/google-api.service';

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
  userName: string = '';
  profileImageUrl: string = '';

  constructor(
    private googleApiService: GoogleApiService
    ){}

  async ngOnInit() {
    try {
      const token = localStorage.getItem('googleAuthToken');
      if (token) {
        const userInfo = await this.googleApiService.getUserInfo(token);
        console.log(userInfo);
        this.userName = userInfo.name;
        this.profileImageUrl = userInfo.picture; 
      } else {
        console.error('Token de autenticación no encontrado.');
      }
    } catch (error) {
      console.error('Error al obtener la información del usuario:', error);
    };
    
    this.itemsMenuUsuario = [
      {
        label: 'Opciones',
        items: [
          {
            label: 'Perfil',
            icon: 'pi pi-user',
            routerLink: '/principal/perfil'
          },
          {
            label: 'Cerrar Sesión',
            icon: 'pi pi-sign-out'
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
                    icon: 'pi pi-sign-in'
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
              icon: 'pi pi-file-edit',
              routerLink: '/principal/editoriales'
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
