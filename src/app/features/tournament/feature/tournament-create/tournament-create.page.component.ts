import { Component, OnInit } from '@angular/core';
import { CreateTournamentService } from '../../data-access/create-tournament.service';

@Component({
  selector: 'app-tournament-create-page',
  templateUrl: './tournament-create.page.component.html',
  styleUrls: ['./tournament-create.page.component.scss']
})
export class TournamentCreatePageComponent implements OnInit {

  step = 'default';

  constructor(
    private readonly createTournamentService: CreateTournamentService
  ) { }

  ngOnInit(): void {
  }

  nextStep(): void {
  }

  backStep(): void {
  }

}
