import { Component, OnInit } from '@angular/core';
import { RepositoryInfo } from '../models/RepositoryInfo';
import { RepositoryInfoService } from '../services/repository-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repositories-section',
  templateUrl: './repositories-section.component.html',
  styleUrls: ['./repositories-section.component.css']
})
export class RepositoriesSectionComponent implements OnInit {
  displayedColumns: string[] = ['Name'];
  data: Array<RepositoryInfo> = [];

  constructor(private router: Router, private _repositoryInfoService: RepositoryInfoService) {
  }

  token!: string | null;
  ngOnInit() {
    this._repositoryInfoService.getRepositories().subscribe(response => {
      this.data = response;
    });

    this.token = localStorage.getItem("AccessToken");
  }

  onTest(repositoryInfo: RepositoryInfo) {
    console.log(repositoryInfo);
    this.router.navigateByUrl('/repository-page/' + repositoryInfo.Id)
  }
}
