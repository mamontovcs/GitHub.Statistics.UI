import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AccountInfo } from '../models/AccountInfo';

@Injectable({
  providedIn: 'root'
})
export class AccountInfoService {

  constructor(private _httpClient: HttpClient) { }

  getAccountInfo(): Observable<AccountInfo> {

    const token = localStorage.getItem("AccessToken")?.toString() ?? "";
    const headers = new HttpHeaders()
      .set("AccessToken", token.toString());

    var repositoryInfos = this._httpClient.get<AccountInfo>('http://localhost:2508/accountinfo/test', { 'headers': headers });
    return repositoryInfos;
  }
}
