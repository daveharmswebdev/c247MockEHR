import { Component, OnInit } from '@angular/core';
import { PatientService } from '../shared/patient.service';

@Component({
  templateUrl: './patient-detail.component.html'
})
export class PatientDetailComponent implements OnInit {
  patient: any;

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.patient = this.patientService.getOnePatient(1);
  }
}
