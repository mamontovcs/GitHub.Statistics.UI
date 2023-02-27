import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoriesSectionComponent } from './repositories-section/repositories-section.component';
import { RepositoryPageComponent } from './repository-page/repository-page.component';

const routes: Routes = [
  { path: 'repositories-section', component: RepositoriesSectionComponent },
  { path: 'repository-page/:id', component: RepositoryPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
