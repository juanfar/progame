import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentStepComponent } from './tournament-step.component';

describe('TournamentStepComponent', () => {
  let component: TournamentStepComponent;
  let fixture: ComponentFixture<TournamentStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
