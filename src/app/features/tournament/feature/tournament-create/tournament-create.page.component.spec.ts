import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentCreatePageComponent } from './tournament-create.page.component';

describe('TournamentCreate.PageComponent', () => {
  let component: TournamentCreatePageComponent;
  let fixture: ComponentFixture<TournamentCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentCreatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
