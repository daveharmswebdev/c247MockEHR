import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-patient-thumbnail',
  template: `
    <div class="row">
      <div class="col-md-3"><a href="#">{{patient?.lastName}}, {{patient?.firstName}}</a></div>
      <div class="col-md-3">{{patient?.age}}, {{patient?.dob}}</div>
      <div class="col-md-3">{{patient?.gender}}</div>
      <div class="col-md-3">{{patient?.address}}, {{patient?.city}}, {{patient?.state}} {{patient?.zip}}</div>
    </div>
  `,
  styles: [`
    div.row {margin: 10px 0}
  `]
})
export class PatientThumbnailComponent {
  @Input() patient: any;
}
