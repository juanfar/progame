import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TournamentCreatePageComponent } from './tournament-create.page.component';

const routes: Routes = [
  {
    path: '',
    component: TournamentCreatePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TournamentCreateRoutingModule { }
