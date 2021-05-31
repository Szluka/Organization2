import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private aths: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.aths.logout();
  }

  navTo(url: string): void {
    this.router.navigateByUrl(url);
  }

  login(): void {
    if (this.form.invalid) {
      return;
    }
    this.aths.login(this.form.value.email, this.form.value.password).then(
      result => {
        console.log(result);
        this.navTo('/list');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
