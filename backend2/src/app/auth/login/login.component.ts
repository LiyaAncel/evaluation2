import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  credentials = { email : '', password: ''};

  constructor(private authservice:AuthService) { }

  login() {
    this.authservice.login(this.credentials)
  }

}
