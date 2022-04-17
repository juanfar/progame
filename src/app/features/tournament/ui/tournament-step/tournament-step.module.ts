import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TournamentStepComponent } from './tournament-step.component';



@NgModule({
  declarations: [TournamentStepComponent],
  exports: [TournamentStepComponent],
  imports: [
    CommonModule
  ]
})
export class TournamentStepModule { }
