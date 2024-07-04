import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
declare var google:any;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonModule,FloatLabelModule,InputTextModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  onLogin() {
    const clientId = '609668435062-jf1alipdpsiqhm4p92f0qierg7f0hsle.apps.googleusercontent.com';
    const redirectUri = 'http://localhost:4200/auth-callback';
    const scope = 'https://www.googleapis.com/auth/userinfo.profile';

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth` +
                   `?client_id=${clientId}` +
                   `&redirect_uri=${redirectUri}` +
                   `&response_type=token` +
                   `&scope=${scope}`;

    window.location.href = authUrl;
  }
}
