import { Component, Input } from '@angular/core';
import { IPatient } from './index';

@Component({
  selector: 'app-patient-thumbnail',
  template: `
    <div class="row">
      <div class="col-md-3 patientLink" [routerLink]="['/patient', patient.id]">{{patient?.lastName}}, {{patient?.firstName}}</div>
      <div class="col-md-3">{{patient?.age}}, {{patient?.dob}}</div>
      <div class="col-md-3">{{patient?.gender}}</div>
      <div class="col-md-3">
        {{patient?.address.street}}, {{patient?.address.city}}, {{patient?.address.state}} {{patient?.address.zip}}
      </div>
    </div>
  `,
  styles: [`
    div.row {margin: 10px 0}
    .patientLink:hover {color: blue; cursor: pointer; font-size: 110%}
  `]
})
export class PatientThumbnailComponent {
  @Input() patient: IPatient;
}
