import { StorageService } from 'src/app/services/storage.service';
import { HttpClient } from '@angular/common/http';
import { LoginPayload, Token } from './interface';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticated = false;

  constructor(private httpClient: HttpClient, private storageService: StorageService) { }

  public isAuthenticated(): Promise<boolean> {
    return this.storageService.get('user').then(val => {
      if (val === null) {
        return false;
      }
      return true;
    }).catch(err => {
      throw err;
    });
  }

  getAuthToken(payload: LoginPayload) {
    return this.httpClient.post<Token>(`${environment.origin}${environment.authEndpoint}token`, payload);
  }

  logout() {
    return this.storageService.remove('user');
  }
}