import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs/RX';

import { IPatient } from './patient.model';

const PATIENTS: IPatient[] = [
    {
      id: 1,
      lastName: 'Doe',
      firstName: 'John',
      age: 55,
      dob: new Date('07/07/1962'),
      gender: 'Male',
      address: {
        street: '123 Any St.',
        city: 'Anywhere',
        state: 'TN',
        zip: '37215',
      },
      visits: [
        {
          id: 1,
          date: new Date('07/04/2017'),
          complaint: 'flu like symptoms'
        }
      ]
    },
    {
      id: 2,
      lastName: 'Smith',
      firstName: 'Patty',
      age: 65,
      dob: new Date('07/07/1952'),
      gender: 'Female',
      address: {
        street: '123 Any St.',
        city: 'Anywhere',
        state: 'TN',
        zip: '37215'
      }
    },
    {
      id: 3,
      lastName: 'Doe',
      firstName: 'John',
      age: 55,
      dob: new Date('07/07/1962'),
      gender: 'Male',
      address: {
        street: '123 Any St.',
        city: 'Anywhere',
        state: 'TN',
        zip: '37215'
      }
    },
    {
      id: 4,
      lastName: 'Doe',
      firstName: 'John',
      age: 55,
      dob: new Date('07/07/1962'),
      gender: 'Male',
      address: {
        street: '123 Any St.',
        city: 'Anywhere',
        state: 'TN',
        zip: '37215',
      },
      visits: [
        {
          id: 1,
          date: new Date('01/02/2017'),
          complaint: 'headache'
        }
      ]
    },
    {
      id: 5,
      lastName: 'Doe',
      firstName: 'John',
      age: 55,
      dob: new Date('07/07/1962'),
      gender: 'Male',
      address: {
        street: '123 Any St.',
        city: 'Anywhere',
        state: 'TN',
        zip: '37215'
      }
    }
  ];

  @Injectable()
export class PatientService {
  getPatients(): Observable<IPatient[]> {
    const subject = new Subject<IPatient[]>();
    setTimeout(() => {
      subject.next(PATIENTS);
      subject.complete();
    }, 200);
    return subject;
  }

  getOnePatient(id: number): IPatient {
    return PATIENTS.find(patient => patient.id === id);
  }

  savePatient(patient: IPatient) {
    const newPatient = Object.assign(patient, {id: 999}, {visits: []});
    PATIENTS.push(newPatient);
  }
}
