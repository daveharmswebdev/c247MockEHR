import { Routes } from '@angular/router';

import { EhrComponent } from './ehr/ehr.component';
import { PatientListComponent } from './patient/patient-list.component';
import { PatientDetailComponent } from './patient/patient-detail/patient-detail.component';

export const rootRoutes: Routes = [
  { path: 'ehr', component: EhrComponent },
  { path: 'patient', component: PatientListComponent },
  { path: 'patient/:id', component: PatientDetailComponent },
  { path: '', redirectTo: 'ehr', pathMatch: 'full' }
];
