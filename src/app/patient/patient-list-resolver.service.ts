import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { PatientService } from './shared/patient.service';

@Injectable()
export class PatientListResolver implements Resolve<any> {

  constructor(private patientService: PatientService) {}
  resolve() {
    return this.patientService.getPatients().map(patients => patients);
  }
}
