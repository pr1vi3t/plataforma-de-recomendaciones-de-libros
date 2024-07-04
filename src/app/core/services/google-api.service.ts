import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {
    private clientId = '609668435062-jf1alipdpsiqhm4p92f0qierg7f0hsle.apps.googleusercontent.com';
    private redirectUri = 'http://localhost:4200/auth-callback';
  
    constructor(private http: HttpClient) { }
  
    async getUserInfo(token: string): Promise<any> {
      const url = 'https://www.googleapis.com/oauth2/v1/userinfo';
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
  
      const observable = this.http.get(url, { headers });
  
      return lastValueFrom(observable);
    }
    getAccessTokenFromUrl(): string | null {
      const hash = window.location.hash.substring(1);
      const params = new URLSearchParams(hash);
      return params.get('access_token');
    }
    
}
