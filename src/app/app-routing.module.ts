import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RepositoriesSectionComponent } from './components/repositories-section/repositories-section.component';
import { RepositoryPageComponent } from './components/repository-page/repository-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'repositories-section', component: RepositoriesSectionComponent },
  { path: 'repository-page/:id', component: RepositoryPageComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
