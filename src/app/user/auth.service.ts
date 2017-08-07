import { Injectable } from '@angular/core';

import { IUser } from './user.model';

@Injectable()
export class AuthService {
  currentUser: IUser;

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'Dave',
      lastName: 'Harms',
      department: 'CCM',
      timezone: 'CST'
    };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  saveProfile(values) {
    this.currentUser.firstName = values.firstName;
    this.currentUser.lastName = values.lastName;
    this.currentUser.department = values.department;
    this.currentUser.timezone = values.timezone;
    console.log(this.currentUser);
  }
};
