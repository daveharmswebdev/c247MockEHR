import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../shared/patient.service';


@Component({
  templateUrl: './patient-detail.component.html'
})
export class PatientDetailComponent implements OnInit {
  patient: any;

  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.patient = this.patientService.getOnePatient(+this.route.snapshot.params['id']);
  }
}
