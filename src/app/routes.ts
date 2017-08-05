import { Routes } from '@angular/router';

import { EhrComponent } from './ehr/ehr.component';
import {
  PatientListComponent,
  PatientDetailComponent,
  CreatePatientComponent,
  PatientService,
  PatientListResolver,
  PatientRouteActivator
} from './patient/index';
import { ErrorComponent } from './errors/404.component';

export const rootRoutes: Routes = [
  { path: 'ehr', component: EhrComponent },
  { path: 'patient/new', component: CreatePatientComponent, canDeactivate: ['canDeactivateCreatePatient']},
  { path: 'patient', component: PatientListComponent, resolve: {patients: PatientListResolver} },
  { path: 'patient/:id', component: PatientDetailComponent, canActivate: [PatientRouteActivator] },
  { path: '404', component: ErrorComponent},
  { path: '', redirectTo: 'ehr', pathMatch: 'full' },
  { path: 'user', loadChildren: './user/user.module#UserModule' }
];
