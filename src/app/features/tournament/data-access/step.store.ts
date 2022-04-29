import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { Observable } from "rxjs";

export interface StepperState {
  currentStep: string;
  nextStep: string;
  previousStep: string;
}

@Injectable()
export class StepperStore extends ComponentStore<StepperState> {

  constructor() {
    super({
      currentStep: 'default',
      nextStep: '',
      previousStep: '',
    });
  }

  readonly currentStep$: Observable<string> = this.select(state => state.currentStep);
  readonly nextStep$: Observable<string> = this.select(state => state.nextStep);
  readonly previousStep$: Observable<string> = this.select(state => state.previousStep);

  goStep(step: string) {
    this.updater((state, currentStep: string) => ({
      ...state,
      currentStep,
    }));
  }
  
}