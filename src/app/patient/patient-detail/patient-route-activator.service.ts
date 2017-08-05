import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { PatientService } from './../shared/patient.service';

@Injectable()
export class PatientRouteActivator implements CanActivate {
  constructor(
    private patientService: PatientService,
    private router: Router
  ) {

  }

  canActivate(route: ActivatedRouteSnapshot) {
    const patientExists = !!this.patientService.getOnePatient(+route.params['id']);

    if (!patientExists) {
      this.router.navigate(['/404']);
    }

    return patientExists;
  }
}
