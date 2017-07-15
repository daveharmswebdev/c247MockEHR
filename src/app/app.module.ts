import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { UserModule } from './user/user.module';

import { rootRoutes } from './routes';
import { EhrComponent } from './ehr/ehr.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRoutes),
    UserModule
  ],
  declarations: [
    AppComponent,
    PatientListComponent,
    EhrComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
