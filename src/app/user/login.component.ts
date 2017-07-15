import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor(
    private router: Router
  ) { }

  login(formValues) {
    console.log('logging in', formValues.userName, formValues.password);
  }

  cancel() {
    this.router.navigate(['ehr']);
  }
};
