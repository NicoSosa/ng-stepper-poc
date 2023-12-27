import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.less']
})
export class StepperComponent implements OnInit {
  _currentStep: number = 0;

  @Input() steps: string[] = [];
  @Input() canPreviousStep: boolean = true;
  @Input() canNextStep: boolean = true;

  @Input()
  set currentStep(val: number) {
    this.currentStepChange.emit(val);
    this._currentStep = val;
  }
  get currentStep() {
    return this._currentStep;
  }

  @Output() currentStepChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  previousStep(): void {
    if (!this.isFirstStep && this.canPreviousStep) {
      this.currentStep = this.currentStep - 1;
      this.currentStepChange.emit(this.currentStep);
    }
  }

  nextStep(): void {
    if (!this.isLastStep && this.canNextStep) {
      this.currentStep = this.currentStep + 1;
      this.currentStepChange.emit(this.currentStep);
    }
  }

  get stepsLength(): number {
    return this.steps.length;
  }

  get progress(): number {
    return 100 / this.stepsLength * (this.currentStep + 1);
  }

  get isFirstStep(): boolean {
    return this.currentStep <= 0
  }

  get isLastStep(): boolean {
    return (this.currentStep + 1) >= this.stepsLength;
  }
}
