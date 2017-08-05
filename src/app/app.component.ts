import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  template: `
    <div>
        <app-nav-bar></app-nav-bar>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: FirebaseListObservable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.items = db.list('/items');
  }
}
