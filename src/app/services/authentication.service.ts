import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _httpClient: HttpClient) { }

  public authtenticate() {
    return this._httpClient.get('http://localhost:2509/authtentication/getOAuthLink');
  }
}
