import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repository-page',
  templateUrl: './repository-page.component.html',
  styleUrls: ['./repository-page.component.css']
})
export class RepositoryPageComponent {

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    const reposioryId = this.activatedRoute.snapshot.paramMap.get('id');
    alert(reposioryId);
  }
}
