import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PatientListComponent } from './patient-list/patient-list.component';

import { rootRoutes } from './routes';
import { EhrComponent } from './ehr/ehr.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    EhrComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
