import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoriesSectionComponent } from './repositories-section/repositories-section.component';

const routes: Routes = [
  { path: 'repositories-section', component: RepositoriesSectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
