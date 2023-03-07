import { Component, OnInit, ViewChild } from '@angular/core';
import { RepositoryInfo } from '../../models/RepositoryInfo';
import { RepositoryInfoService } from '../../services/repository-info.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-repositories-section',
  templateUrl: './repositories-section.component.html',
  styleUrls: ['./repositories-section.component.css']
})
export class RepositoriesSectionComponent implements OnInit {
  displayedColumns: string[] = ['Id' ,'Name'];
  data: MatTableDataSource<RepositoryInfo>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router, private _repositoryInfoService: RepositoryInfoService) {
  }

  token!: string | null;
  ngOnInit() {
    this._repositoryInfoService.getRepositories().subscribe(response => {
      this.data = new MatTableDataSource(response);
      this.data.paginator = this.paginator;
      this.data.sort = this.sort;
    });

    this.token = localStorage.getItem("AccessToken");
  }

  applyFilter(event: Event) {
    let filterValue = (event.target as HTMLInputElement).value;
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.data.filter = filterValue;
  }

  onTest(repositoryInfo: RepositoryInfo) {
    console.log(repositoryInfo);
    this.router.navigateByUrl('/repository-page/' + repositoryInfo.Id)
  }
}
