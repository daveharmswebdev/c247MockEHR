import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/RX';

const PATIENTS = [
    {
      id: 1,
      lastName: 'Doe',
      firstName: 'John',
      age: '55',
      dob: '07/07/1962',
      gender: 'Male',
      address: '123 Any St.',
      city: 'Anywhere',
      state: 'TN',
      zip: '37215'
    },
    {
      id: 2,
      lastName: 'Smith',
      firstName: 'Patty',
      age: '65',
      dob: '07/07/1952',
      gender: 'Female',
      address: '123 Any St.',
      city: 'Anywhere',
      state: 'TN',
      zip: '37215'
    },
    {
      id: 3,
      lastName: 'Doe',
      firstName: 'John',
      age: '55',
      dob: '07/07/1962',
      gender: 'Male',
      address: '123 Any St.',
      city: 'Anywhere',
      state: 'TN',
      zip: '37215'
    },
    {
      id: 4,
      lastName: 'Doe',
      firstName: 'John',
      age: '55',
      dob: '07/07/1962',
      gender: 'Male',
      address: '123 Any St.',
      city: 'Anywhere',
      state: 'TN',
      zip: '37215'
    },
    {
      id: 5,
      lastName: 'Doe',
      firstName: 'John',
      age: '55',
      dob: '07/07/1962',
      gender: 'Male',
      address: '123 Any St.',
      city: 'Anywhere',
      state: 'TN',
      zip: '37215'
    }
  ];


  @Injectable()
export class PatientService {
  getPatients() {
    const subject = new Subject();
    setTimeout(() => {
      subject.next(PATIENTS);
      subject.complete();
    }, 200);
    return subject;
  }

  getOnePatient(id: number) {
    return PATIENTS.find(patient => patient.id === id);
  }
}
