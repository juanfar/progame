import { Component, OnInit } from '@angular/core';
import { CreateTournamentService } from '../../data-access/create-tournament.service';
import { StepperStore } from '../../data-access/step.store';

@Component({
  selector: 'app-tournament-create-page',
  templateUrl: './tournament-create.page.component.html',
  styleUrls: ['./tournament-create.page.component.scss'],
  providers: [StepperStore]
})
export class TournamentCreatePageComponent implements OnInit {

  step$ = this.stepperStore.currentStep$;

  constructor(
    private readonly createTournamentService: CreateTournamentService,
    private stepperStore: StepperStore
  ) { }

  ngOnInit(): void {
  }

  goStep(event: any): void {
    this.stepperStore.goStep(event);
  }

  backStep(): void {
  }

}
