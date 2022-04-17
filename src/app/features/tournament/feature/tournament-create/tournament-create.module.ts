import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TournamentCreateRoutingModule } from './tournament-create-routing.module';
import { TournamentCreatePageComponent } from './tournament-create.page.component';
import { TournamentStepModule } from '../../ui/tournament-step/tournament-step.module';


@NgModule({
  declarations: [
    TournamentCreatePageComponent
  ],
  imports: [
    CommonModule,
    TournamentCreateRoutingModule,
    TournamentStepModule
  ]
})
export class TournamentCreateModule { }
