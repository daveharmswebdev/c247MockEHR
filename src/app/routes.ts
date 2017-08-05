import { Routes } from '@angular/router';

import { EhrComponent } from './ehr/ehr.component';
import { PatientListComponent } from './patient/patient-list.component';
import { CreatePatientComponent } from './patient/create-patient.component';
import { PatientDetailComponent } from './patient/patient-detail/patient-detail.component';
import { ErrorComponent } from './errors/404.component';

import { PatientRouteActivator } from './patient/patient-detail/patient-route-activator.service';

export const rootRoutes: Routes = [
  { path: 'ehr', component: EhrComponent },
  { path: 'patient/new', component: CreatePatientComponent},
  { path: 'patient', component: PatientListComponent },
  { path: 'patient/:id', component: PatientDetailComponent, canActivate: [PatientRouteActivator] },
  { path: '404', component: ErrorComponent},
  { path: '', redirectTo: 'ehr', pathMatch: 'full' }
];
