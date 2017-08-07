import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PatientService } from './shared/patient.service';

@Component({
  templateUrl: './create-patient.component.html',
  styles: [`
    em { float: right; color: #E05C65; padding-left: 10px; }
    .error input { background-color: #E3C3C5; }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class CreatePatientComponent {
  isDirty: boolean = true;
  patient: any;

  constructor(private router: Router, private patientService: PatientService) {}

  ngOnInit() {
    this.patient = {
      id: 2,
      lastName: 'Smith',
      firstName: 'Patty',
      age: 65,
      dob: new Date('07/07/1952'),
      gender: 'Female',
      address: {
        street: '123 Any St.',
        city: 'Anywhere',
        state: 'TN',
        zip: '37215'
      }
    }
  }

  savePatient(formValues) {
    this.patientService.savePatient(formValues);
    this.isDirty = false;
    this.router.navigate(['/patient']);
  }

  cancel() {
    this.router.navigate(['/patient']);
  }
}
