import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RepositoryInfo } from '../models/RepositoryInfo';

@Injectable({
  providedIn: 'root'
})
export class RepositoryInfoService {

  constructor(private _httpClient: HttpClient) { }

  getRepositories(): Observable<RepositoryInfo[]> {
    var repositoryInfos = this._httpClient.get<Array<RepositoryInfo>>('https://localhost:49153/Test/get');
    return repositoryInfos;
  }
}
