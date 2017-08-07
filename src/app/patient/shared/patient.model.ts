export interface IPatient {
  id: number;
  lastName: string;
  firstName: string;
  age: number;
  dob: Date;
  gender: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  visits?: IVisit[];
}

export interface IVisit {
  id: number;
  date: Date;
  complaint: string;
}
