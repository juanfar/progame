import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tournament',
    pathMatch: 'full'
  },
  {
    path: 'tournament',
    loadChildren: () => import('./features/tournament/feature/tournament-shell/tournament-shell.module').then(m => m.TournamentShellModule)
  }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
