import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  initialStep: number = 0;
  currentStep: number = 0;
  steps: string[] = [
    'Primer paso', 'Segundo Paso', 'Tercer Paso', 'Cuarto paso',
    'Quinto paso', 'Sexto Paso', 'Septimo Paso'
  ];

  canPreviousStep: boolean = true;
  canNextStep: boolean = true;

  constructor() {
  }
  
  ngOnInit(): void {
    this.resetSteps();
  }

  previousStep(): void {
    if (this.currentStep > 0) {
      this.currentStep = this.currentStep - 1;
    }
  }

  resetSteps(): void {
    this.currentStep = this.initialStep;  
  }  

  nextStep(): void {
    if ((this.currentStep + 1) < this.steps.length) {
      this.currentStep = this.currentStep + 1;
    }
  }

  changeCanPreviousStep(): void {
    this.canPreviousStep = !this.canPreviousStep;
  }
  changeCanNextStep(): void {
    this.canNextStep = !this.canNextStep;
  }
}
