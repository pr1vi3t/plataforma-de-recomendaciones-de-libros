import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { GalleriaModule } from 'primeng/galleria';
import { GoogleApiService } from '../../core/services/google-api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, InputTextModule, GalleriaModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  userName: string = '';

  constructor(
    private googleApiService: GoogleApiService
  ) { }
  
  images: any[] | undefined;
  responsiveOptions: any[] = [];

  async ngOnInit() {
    try {
      const token = localStorage.getItem('googleAuthToken');
      if (token) {
        const userInfo = await this.googleApiService.getUserInfo(token);
        console.log(userInfo);
        this.userName = userInfo.name;
      } else {
        console.error('Token de autenticación no encontrado.');
      }
    } catch (error) {
      console.error('Error al obtener la información del usuario:', error);
    }
      
    this.images = [
        { 
          itemImageSrc: 'assets/img/harry-potter-prueba.jpg', 
          thumbnailImageSrc: 'assets/img/harry-potter-prueba.jpg' 
        },  
        { 
          itemImageSrc: 'assets/img/mi-planta-de-naranja-lima.jpg', 
          thumbnailImageSrc: 'assets/img/mi-planta-de-naranja-lima.jpg' 
        },
        { 
          itemImageSrc: 'assets/img/cien-años-de-soledad.jpg', 
          thumbnailImageSrc: 'assets/img/cien-años-de-soledad.jpg' 
        },
        { 
          itemImageSrc: 'assets/img/el-visitante.jpg', 
          thumbnailImageSrc: 'assets/img/el-visitante.jpg' 
        },
        { 
          itemImageSrc: 'assets/img/la-ciudad-y-los-perros.jpg', 
          thumbnailImageSrc: 'assets/img/la-ciudad-y-los-perros.jpg' 
        }
      ];

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5,
        
      },
      {
        breakpoint: '768px',
        numVisible: 3
      },
      {
        breakpoint: '560px',
        numVisible: 1
      }
    ];
  }
    
}

