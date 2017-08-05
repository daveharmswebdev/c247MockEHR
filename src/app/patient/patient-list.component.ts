import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService, IPatient } from './index';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients: IPatient[];

  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.patients = this.route.snapshot.data['patients'];
  }

}
