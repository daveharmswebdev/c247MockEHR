import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../shared/patient.service';
import { IPatient } from '../shared/patient.model';


@Component({
  templateUrl: './patient-detail.component.html'
})
export class PatientDetailComponent implements OnInit {
  patient: IPatient;

  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.patient = this.patientService.getOnePatient(+this.route.snapshot.params['id']);
  }
}
