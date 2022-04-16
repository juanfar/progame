import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TournamentShellRoutingModule } from './tournament-shell-routing.module';
import { TournamentCreateModule } from '../tournament-create/tournament-create.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TournamentShellRoutingModule,
    TournamentCreateModule
  ]
})
export class TournamentShellModule { }
