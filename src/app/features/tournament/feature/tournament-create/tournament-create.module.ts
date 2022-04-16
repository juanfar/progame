import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TournamentCreateRoutingModule } from './tournament-create-routing.module';
import { TournamentCreatePageComponent } from './tournament-create.page.component';


@NgModule({
  declarations: [
    TournamentCreatePageComponent
  ],
  imports: [
    CommonModule,
    TournamentCreateRoutingModule
  ]
})
export class TournamentCreateModule { }
