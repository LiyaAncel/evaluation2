import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  employee = { firstname: '',secondname:'',jobposition:'', email:'', password: '' };

  constructor(private authService:AuthService) { }

  register() {
    this.authService.register(this.employee).subscribe(
      () => {
        alert('Employee registerd successfully!');
      }, 
      error => {
        console.error('Error registering employee:', error);
      }
    );
  }
}
