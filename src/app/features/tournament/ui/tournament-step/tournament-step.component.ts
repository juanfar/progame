import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tournament-step',
  templateUrl: './tournament-step.component.html',
  styleUrls: ['./tournament-step.component.scss']
})
export class TournamentStepComponent implements OnInit {

  @Input() step!: string;
  @Output() nextStepEvent = new EventEmitter<string>();
  @Output() backStepEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  nextStep() {
    this.nextStepEvent.emit();
  }

  backStep() {
    this.backStepEvent.emit();
  }

}
