import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from './auth.service';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em { float: right; color: #E05C65; padding-left: 10px; }
    .error input { background-color: #E3C3C5; }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private userName: FormControl;
  private firstName: FormControl;
  private lastName: FormControl;
  private department: FormControl;
  private timezone: FormControl;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userName = new FormControl(this.auth.currentUser.userName, Validators.required);
    this.firstName = new FormControl(this.auth.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.auth.currentUser.lastName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.department = new FormControl(this.auth.currentUser.department, Validators.required);
    this.timezone = new FormControl(this.auth.currentUser.timezone, Validators.required);
    this.profileForm = new FormGroup({
      userName: this.userName,
      firstName: this.firstName,
      lastName: this.lastName,
      department: this.department,
      timezone: this.timezone
    });
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.auth.saveProfile(formValues);
      this.router.navigate(['patient']);
    }
  }

  cancel() {
    this.router.navigate(['patient']);
  }

  validateUserName() {
    return this.userName.valid || this.userName.untouched;
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

  validateDepartment() {
    return this.department.valid || this.department.untouched;
  }

  validateTimezone() {
    return this.timezone.valid || this.timezone.untouched;
  }
  
}
