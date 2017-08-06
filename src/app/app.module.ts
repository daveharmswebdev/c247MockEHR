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
import {
  PatientListComponent,
  PatientThumbnailComponent,
  PatientDetailComponent,
  CreatePatientComponent,
  PatientService,
  PatientListResolver,
  PatientRouteActivator
} from './patient/index';
import { UserModule } from './user/user.module';
import { ErrorComponent } from './errors/404.component';
import { AuthService } from './user/auth.service';

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
    PatientRouteActivator,
    PatientListResolver,
    {
      provide: 'canDeactivateCreatePatient',
      useValue: checkDirtyState
    },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreatePatientComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}