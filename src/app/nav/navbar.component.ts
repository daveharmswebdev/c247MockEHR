import { Component } from '@angular/core';
import { AuthService } from './../user/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBarComponent {
  pageTitle = 'Care247 Mock EHR';

  constructor(private auth: AuthService) {}
}
