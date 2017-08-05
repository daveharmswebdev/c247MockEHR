import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './create-patient.component.html'
})
export class CreatePatientComponent {
  isDirty: boolean = true;

  constructor(private router: Router) {}

  cancel() {
    this.router.navigate(['/patient']);
  }
}
