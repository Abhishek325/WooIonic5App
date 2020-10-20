import { StorageService } from 'src/app/services/storage.service';
import { HttpClient } from '@angular/common/http';
import { LoginPayload, Token } from './interface';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  @Output() authenticated = new EventEmitter<boolean>();

  constructor(private httpClient: HttpClient, private storageService: StorageService) { }

  public isAuthenticated(): Promise<boolean> {
    return this.storageService.get('user').then(val => {
      return val != null;
    }).catch(err => {
      throw err;
    });
  }

  getAuthToken(payload: LoginPayload) {
    return this.httpClient.post<Token>(`${environment.origin}${environment.authEndpoint}token`, payload);
  }

  logout() {
    this.authenticated.emit(false);
    return this.storageService.remove('user');
  }
}