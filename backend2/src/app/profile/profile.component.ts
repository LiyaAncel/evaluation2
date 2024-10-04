import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private detailsService:DetailsService) { }

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee() {
    this.detailsService.getEmployeeDetails()
  }
  

}
