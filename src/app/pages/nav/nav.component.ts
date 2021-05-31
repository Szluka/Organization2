import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  constructor(private aths: AuthService, private router: Router) {
  }

  logout(): void {
    this.aths.logout();
    this.router.navigateByUrl('home');
  }

}
