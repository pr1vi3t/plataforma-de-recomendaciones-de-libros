import { Component, OnInit } from '@angular/core';
import { GoogleApiService } from '../../../core/services/google-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth-callback',
  standalone: true,
  imports: [],
  templateUrl: './auth-callback.component.html',
  styleUrl: './auth-callback.component.scss'
  
})
export class AuthCallbackComponent implements OnInit {
  constructor(
    private router: Router,
    private googleApiService: GoogleApiService
  ) { }

  ngOnInit() {
    const accessToken = this.googleApiService.getAccessTokenFromUrl();
    if (accessToken) {
      localStorage.setItem('googleAuthToken', accessToken);
      this.router.navigate(['/principal']);
    } else {
      console.error('Token de autenticación no encontrado en la URL.');
    }
  }
}




