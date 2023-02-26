import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RepositoryInfo } from '../models/RepositoryInfo';

@Injectable({
  providedIn: 'root'
})
export class RepositoryInfoService {

  constructor(private _httpClient: HttpClient) { }

  getRepositories(): Observable<RepositoryInfo[]> {

    const token = localStorage.getItem("AccessToken")?.toString() ?? "";
    const headers = new HttpHeaders()
      .set("AccessToken", token.toString());

    var repositoryInfos = this._httpClient.get<Array<RepositoryInfo>>('http://localhost:2508/repositories/test', { 'headers': headers });
    return repositoryInfos;
  }
}
