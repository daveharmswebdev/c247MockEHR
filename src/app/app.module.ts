import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/navbar.component';
import { PatientListComponent } from './patient/patient-list.component';
import { PatientThumbnailComponent } from './patient/patient-thumbnail.component';
import { PatientDetailComponent } from './patient/patient-detail/patient-detail.component';
import { CreatePatientComponent } from './patient/create-patient.component';
import { PatientService } from './patient/shared/patient.service';
import { PatientRouteActivator } from './patient/patient-detail/patient-route-activator.service';
import { UserModule } from './user/user.module';
import { ErrorComponent } from './errors/404.component';

import { rootRoutes } from './routes';
import { EhrComponent } from './ehr/ehr.component';
import { firebaseConfig } from '../environments/firebase.config';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(rootRoutes),
    UserModule
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    PatientListComponent,
    PatientThumbnailComponent,
    PatientDetailComponent,
    CreatePatientComponent,
    EhrComponent,
    ErrorComponent
  ],
  providers: [
    PatientService,
    PatientRouteActivator
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
