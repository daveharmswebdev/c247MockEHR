import { Routes } from '@angular/router';

import { EhrComponent } from './ehr/ehr.component';
import { PatientListComponent } from './patient-list/patient-list.component';

export const rootRoutes: Routes = [
  { path: 'ehr', component: EhrComponent },
  { path: 'patient', component: PatientListComponent },
  { path: '', redirectTo: 'ehr', pathMatch: 'full' }
];
